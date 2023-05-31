import React, { useState } from 'react';
import { AreaChart, XAxis, Tooltip, Legend, ResponsiveContainer, Area } from 'recharts';
import classes from '../styles/AverageSessionTime.module.css'

function AverageSessionTime({userId}) {

    const [data, setData] = useState(null);

        fetch(`http://localhost:3000/user/${userId}/average-sessions`)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));

    const sessions = data?.data?.sessions;

    const xAxisTickFormatter = (value) => {
        const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
        return days[value - 1];
    };

    const renderLegendText = () => {
        return <p className='legend'>Durée des sessions moyennes</p>;
    };

    return (
        <div className={classes.average_session_time_chart}>
            <ResponsiveContainer width='100%' height='100%'>
                <AreaChart data={sessions} style={{ backgroundColor: '#FF0000', }} >
                    <XAxis dataKey='day' tickFormatter={xAxisTickFormatter} tick={{fill: '#FFF', opacity: '50%'}} axisLine='false' tickLine='false' />
                    <Tooltip itemStyle={{color: '#000'}} labelStyle={{display: 'none'}}/>
                    <Legend verticalAlign="top" formatter={renderLegendText}/>
                    < Area type='monotone' dataKey='sessionLength' stroke='#FFF' unit=' min' fill='#FFF' fillOpacity={0.05} ></Area>
                </AreaChart >
            </ResponsiveContainer>
        </div>
    );
}

export default AverageSessionTime;
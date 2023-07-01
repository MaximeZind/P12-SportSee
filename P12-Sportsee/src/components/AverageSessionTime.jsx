import React from 'react';
import { AreaChart, XAxis, Tooltip, Legend, ResponsiveContainer, Area } from 'recharts';
import classes from '../styles/AverageSessionTime.module.css'
import getUserAverageSessions from '../utils/getUserAverageSessions';

function AverageSessionTime({userId}) {

    const data = getUserAverageSessions(userId);

    const sessions = data?.data?.sessions;

    const xAxisTickFormatter = (value) => {
        const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
        return days[value - 1];
    };

    const renderLegendText = () => {
        return <p className='legend'>Durée des sessions moyennes</p>;
    };

    
    const tooltipStyle = {
        backgroundColor: '#FFFFFF',
        color: '#000000',
        border: 'none',
        padding: '10px',
        fontSize: '0.625rem',
        fontWeight: 'bold'
    };

    const customTooltip = ({ active, payload }) => {
        if (active && payload) {
            return (
                <div className={classes.custom_tooltip} style={tooltipStyle}>
                    <p>{`${payload[0].value} min`}</p>
                </div>
            );
        }
    }

    return (
        <div className={classes.average_session_time_chart}>
            <ResponsiveContainer width='100%' height='100%'>
                <AreaChart data={sessions} style={{ backgroundColor: '#FF0000', }} >
                    <XAxis dataKey='day' tickFormatter={xAxisTickFormatter} tick={{fill: '#FFF', opacity: '50%'}} axisLine='false' tickLine='false' />
                    <Tooltip content={customTooltip} itemStyle={{color: '#000'}} labelStyle={{display: 'none'}}/>
                    <Legend verticalAlign="top" formatter={renderLegendText}/>
                    < Area type='monotone' dataKey='sessionLength' stroke='#FFF' unit=' min' fill='#FFF' fillOpacity={0.05} ></Area>
                </AreaChart >
            </ResponsiveContainer>
        </div>
    );
}

export default AverageSessionTime;
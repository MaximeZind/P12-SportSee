import React from 'react';
import PropTypes from 'prop-types';
import { AreaChart, XAxis, Tooltip, Legend, ResponsiveContainer, Area, YAxis } from 'recharts';
import classes from '../styles/AverageSessionTime.module.css'

function AverageSessionTime({data}) {

    const sessions = data?.data?.sessions;

    const xAxisTickFormatter = (value) => {
        const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
        return days[value - 1];
    };

    const renderLegendText = () => {
        return <p className='legend' style={{textAlign:'left', marginLeft:'20px', opacity:'0.5'}}>Durée moyenne des sessions</p>;
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
                    <XAxis dataKey='day' tickFormatter={xAxisTickFormatter} tick={{fill: '#FFF', opacity: '50%'}} axisLine={false} tickLine={false} />
                    <Tooltip content={customTooltip} cursor={{strokeOpacity:'0'}}/>
                    <Legend iconSize={0}  verticalAlign="top" formatter={renderLegendText}/>
                    <Area type='natural' dataKey='sessionLength' stroke='#FFF' unit=' min' fill='#FFF' fillOpacity={0.05} strokeWidth={2}></Area>
                </AreaChart >
            </ResponsiveContainer>
        </div>
    );
}
AverageSessionTime.prototypes = {
    data: PropTypes.object.isRequired
}

export default AverageSessionTime;
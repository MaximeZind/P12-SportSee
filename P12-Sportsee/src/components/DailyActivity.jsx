import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';
import classes from '../styles/DailyActivity.module.css'
import getUserActivity from '../utils/getUserActivity';

function DailyActivity({ userId }) {

    const data = getUserActivity(userId);

    let sessions = data?.data?.sessions;
    let smallestWeight = 0;
    let biggestWeight = 0;
    let days = [];
    if (data) {
        smallestWeight = sessions[0].kilogram;
        sessions.map((session) => {
            days.push(session.day[session.day.length-1]);
            if (session.kilogram < smallestWeight) {
                smallestWeight = session.kilogram;
            }
            if (session.kilogram > biggestWeight) {
                biggestWeight = session.kilogram;
            }
        });
        sessions = sessions.map((session) => {
            session.day = session.day[session.day.length-1];
            return session;
        });
    }
    const weightDomain = [smallestWeight - 1, biggestWeight + 1];

    const tooltipStyle = {
        backgroundColor: '#E60000',
        color: '#fff',
        border: 'none',
        fontSize: '0.625rem',
        padding: '10px'
    };

    const customTooltip = ({ active, payload }) => {
        if (active && payload) {
            return (
                <div className={classes.custom_tooltip} style={tooltipStyle}>
                    <p style={{marginBottom: '30px'}}>{`${payload[0].value}kg`}</p>
                    <p>{`${payload[1].value}Kcal`}</p>
                </div>
            );
        }
    }

    const labelStyle = {
        display: "none"
    }

    return (
        <div className={classes.daily_activity_chart}>
            <header className={classes.daily_activity_chart_header}>
                <h2>Activité quotidienne</h2>
                <div className={classes.daily_activity_chart_header_legend}>
                    <p className={classes.weight}>Poids (kg)</p>
                    <p className={classes.calories}>Calories brûlées (kCal)</p>
                </div>
            </header>
            <ResponsiveContainer width='100%' height='90%'>
                <BarChart data={sessions} >
                    <CartesianGrid strokeDasharray="2 2" vertical={false}/>
                    <XAxis dataKey='day' tickLine={false} axisLine={false} />
                    <YAxis dataKey='kilogram' yAxisId="left" allowDecimals={false} domain={weightDomain} orientation='right' tickLine={false} axisLine={false} />
                    <YAxis yAxisId="right" hide={true}/>
                    <Tooltip cursor={{opacity:'0.5'}} content={customTooltip} labelStyle={labelStyle} itemStyle={tooltipStyle} />
                    <Bar yAxisId="left" dataKey="kilogram" fill="#282D30" stroke='#979797' barSize={7} radius={[3, 3, 0, 0]} unit='kg' />
                    <Bar yAxisId="right" dataKey="calories" fill="#E60000" stroke='#979797' barSize={7} radius={[3, 3, 0, 0]} unit='Kcal' />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default DailyActivity;
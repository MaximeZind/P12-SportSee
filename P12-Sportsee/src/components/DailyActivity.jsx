import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';
import classes from '../styles/DailyActivity.module.css'
import getUserActivity from '../utils/getUserActivity';

function DailyActivity({ userId }) {

    const data = getUserActivity(userId);

    const sessions = data?.data?.sessions;
    let smallestWeight = 0;
    let biggestWeight = 0;
    if (data) {
        smallestWeight = sessions[0].kilogram;
        sessions.map((session) => {
            if (session.kilogram < smallestWeight) {
                smallestWeight = session.kilogram;
            }
            if (session.kilogram > biggestWeight) {
                biggestWeight = session.kilogram;
            }
        });
    }
    const weightDomain = [smallestWeight - 1, biggestWeight + 1];

    const tooltipStyle = {
        backgroundColor: '#E60000',
        color: '#fff',
        border: 'none',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    };

    const customTooltip = ({ active, payload }) => {
        if (active && payload) {
            return (
                <div className="custom-tooltip" style={tooltipStyle}>
                    <p className="poids">{`${payload[0].value}kg`}</p>
                    <p className="calories">{`${payload[1].value}Kcal`}</p>
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
                    <CartesianGrid strokeDasharray="2 2" />
                    <XAxis />
                    <YAxis dataKey='kilogram' yAxisId="left" allowDecimals={false} domain={weightDomain} orientation='right' />
                    <YAxis yAxisId="right" hide='true' />
                    <Tooltip content={customTooltip} labelStyle={labelStyle} itemStyle={tooltipStyle} />
                    <Bar yAxisId="left" dataKey="kilogram" fill="#282D30" stroke='#979797' barSize={7} radius={[3, 3, 0, 0]} unit='kg' />
                    <Bar yAxisId="right" dataKey="calories" fill="#E60000" stroke='#979797' barSize={7} radius={[3, 3, 0, 0]} unit='Kcal' />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default DailyActivity;
import React from 'react';
import PropTypes from 'prop-types';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';
import classes from '/src/styles/DailyActivity.module.css'

/**
 * Composant de graphique d'activité quotidienne affichant le poids et les calories brûlées.
 * Ce composant utilise la bibliothèque React et Recharts.
 *
 * @param {Array.<Object>} sessions - Les données des sessions à afficher.
 * @param {string} sessions[].day - Le jour (sous forme YYYY-MM-JJ).
 * @param {number} sessions[].kilogram - Le poids en kilogrammes.
 * @param {number} sessions[].calories - Le nombre de calories brûlées (kCal).
 * @returns {JSX.Element|null} - Un élément React représentant le graphique d'activité quotidienne
 *                             affichant le poids et les calories brûlées
 */

function DailyActivity({ sessions }) {

    let smallestWeight = 0;
    let biggestWeight = 0;

    //copie de sessions sans référence
    let updatedSessions = JSON.parse(JSON.stringify(sessions));

    smallestWeight = updatedSessions[0].kilogram;
    updatedSessions.map((session) => {
        //On définit les poids max et min
        if (session.kilogram < smallestWeight) {
            smallestWeight = session.kilogram;
        }
        if (session.kilogram > biggestWeight) {
            biggestWeight = session.kilogram;
        }
    });
    //On récupère le jour du mois (qu'il soit de 1 ou 2 chiffres)
    updatedSessions = updatedSessions.map((session) => {
        session.day = session.day.length > 1 ? parseInt(session.day[session.day.length - 2] + session.day[session.day.length - 1]) : session.day;
        return session;
    });

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
                    <p style={{ marginBottom: '30px' }}>{`${payload[0].value}kg`}</p>
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
                <BarChart data={updatedSessions} >
                    <CartesianGrid strokeDasharray="2 2" vertical={false} />
                    <XAxis dataKey='day' tickLine={false} axisLine={false} />
                    <YAxis dataKey='kilogram' yAxisId="left" allowDecimals={false} domain={weightDomain} orientation='right' tickLine={false} axisLine={false} />
                    <YAxis yAxisId="right" hide={true} />
                    <Tooltip cursor={{ opacity: '0.5' }} content={customTooltip} labelStyle={labelStyle} itemStyle={tooltipStyle} />
                    <Bar yAxisId="left" dataKey="kilogram" fill="#282D30" stroke='#979797' barSize={7} radius={[3, 3, 0, 0]} unit='kg' />
                    <Bar yAxisId="right" dataKey="calories" fill="#E60000" stroke='#979797' barSize={7} radius={[3, 3, 0, 0]} unit='Kcal' />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

DailyActivity.propTypes = {
    sessions: PropTypes.arrayOf(
        PropTypes.shape(
            {
                day: PropTypes.string.isRequired,
                kilogram: PropTypes.number.isRequired,
                calories: PropTypes.number.isRequired,
            }
        )
    ).isRequired
}

export default DailyActivity;
import React from 'react';
import PropTypes from 'prop-types';
import { RadarChart, Radar, ResponsiveContainer, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import classes from '/src/styles/Performances.module.css';

/**
 * Le composant Performances affiche un RadarChart en utilisant la bibliothèque Recharts pour visualiser des données de performances.
 * @param {Array} performances - Un tableau d'objets de données de performances.
 * @param {string} performances.kind - Le type de performance (par exemple, 'Intensité', 'Vitesse', 'Force', 'Endurance', 'Energie', 'Cardio').
 * @param {number} performances.value - La valeur de la performance.
 * @returns {JSX.Element} La représentation JSX du composant Performances.
 */

function Performances({ performances }) {

    let sortedPerformances = [...performances];
    const kindsOrder = ['Intensité', 'Vitesse', 'Force', 'Endurance', 'Energie', 'Cardio'];
    sortedPerformances = sortedPerformances.sort((a, b) => {
        return kindsOrder.indexOf(a.kind) - kindsOrder.indexOf(b.kind);
    });

    return (
        <div className={classes.performances_chart}>
            <ResponsiveContainer width='100%' height='100%'>
                <RadarChart outerRadius='70%' data={sortedPerformances} style={{ backgroundColor: '#282D30' }} >
                    <PolarAngleAxis dataKey="kind" angleAxisId={0} tickLine={false} tick={{ fontSize: 10 }} stroke='#FFF' />
                    <PolarGrid radialLines={false}/>
                    <Radar name="Performances" dataKey="value" fill="#FF0101" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

Performances.propTypes = {
    performances: PropTypes.arrayOf(
        PropTypes.shape({
            kind: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default Performances;
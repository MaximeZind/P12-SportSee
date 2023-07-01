import React from 'react';
import { RadarChart, Radar, ResponsiveContainer, PolarGrid, PolarAngleAxis } from 'recharts';
import classes from '../styles/Performances.module.css'
import getUserPerformance from '../utils/getUserPerformance';

function Performances({userId}) {

    const data = getUserPerformance(userId);
    let newArray = [];
    if(data){
        newArray = data.data.data.map((obj) => ({
            value: obj.value,
            kind: data.data.kind[obj.kind],
        }));
        const kindsOrder = ['intensity', 'speed', 'strength', 'endurance', 'energy', 'cardio'];
        newArray = newArray.sort((a, b) => {
            return kindsOrder.indexOf(a.kind) - kindsOrder.indexOf(b.kind);
          });
    }

    return (
        <div className={classes.performances_chart}>
            <ResponsiveContainer width='100%' height='100%'>
                <RadarChart outerRadius='70%' data={newArray} style={{ backgroundColor: '#282D30' }} >
                <PolarAngleAxis dataKey="kind" angleAxisId={0} tickLine={false} tick={{ fontSize: 10 }} stroke='#FFF'/>
                    <PolarGrid />
                    <Radar name="Performances" dataKey="value" fill="#FF0101" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Performances;
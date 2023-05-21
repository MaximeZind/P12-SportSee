import React, { useState, useEffect } from 'react';
import { RadarChart, Radar, ResponsiveContainer, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import '../styles/Performances.css'

function Performances(props) {

    const userId = props.id;
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/user/${userId}/performance`)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }, []);

    data && console.log(data.data.kind);
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
        console.log(newArray);
    }

    return (
        <div className='performances-chart'>
            <ResponsiveContainer width='100%' height='100%'>
                <RadarChart outerRadius='70%' data={newArray} style={{ backgroundColor: '#282D30' }} >
                <PolarAngleAxis dataKey="kind" angleAxisId={0} tick={{ fontSize: 10, color: '#FFF' }}/>
                    <PolarGrid />
                    <Radar name="Performances" dataKey="value" fill="#FF0101" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Performances;
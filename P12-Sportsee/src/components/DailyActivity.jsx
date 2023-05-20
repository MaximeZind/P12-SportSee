import React, { useState, useEffect } from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import '../styles/DailyActivity.css'

function DailyActivity(props) {

    const userId = props.id;
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/user/${userId}/activity`)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }, []);

    const sessions = data?.data?.sessions;
    let smallestWeight = 0;
    let biggestWeight = 0;
    if (data){
        smallestWeight = sessions[0].kilogram;
        sessions.map((session) => {
            if(session.kilogram < smallestWeight){
                smallestWeight = session.kilogram;
            }
            if(session.kilogram > biggestWeight){
                biggestWeight = session.kilogram;
            }
        });
    }
    const weightDomain = [smallestWeight-1, biggestWeight+1];

    const tooltipStyle = {
        backgroundColor: '#E60000',
        color: '#fff',
        border: 'none'
      };

    const labelStyle = {
        display: "none"
    }

    return (
        <BarChart width={730} height={250} data={sessions}>
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis />
            <YAxis dataKey='kilogram' yAxisId="left" domain={weightDomain}/>
            <YAxis dataKey='calories' yAxisId="right" />
            <Tooltip contentStyle={tooltipStyle} labelStyle={labelStyle} itemStyle={tooltipStyle}/>
            <Legend />
            <Bar yAxisId="left" dataKey="kilogram" fill="#282D30" stroke='#979797' barSize={7} radius={[3,3,0,0]}/>
            <Bar yAxisId="right" dataKey="calories" fill="#E60000" barSize={7} radius={[3,3,0,0]}/>
        </BarChart>
    )
}

export default DailyActivity;
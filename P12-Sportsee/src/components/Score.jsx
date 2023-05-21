import React, { useState, useEffect } from 'react';
import { PieChart, Pie, ResponsiveContainer, Legend } from 'recharts';
import '../styles/Score.css'

function Score(props) {

    const userId = props.id;
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/user/${userId}`)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }, []);

    let scoreData = {};
    let leftToDo = {};
    let chartData = [];
    let score = 0;
    if (data) {
        if(data.data.score){
            score = data.data.score;
        } else if (data.data.todayScore){
            score = data.data.todayScore;
        }
        console.log(score)
        scoreData = {
            "name": "Score",
            "value": score
        }
        leftToDo = {
            "name": "Remaining",
            "value": 1 - score
        }
        chartData = [scoreData, leftToDo];
    }
    const innerCircle = [{
        "name": "innerCircle",
        "value": 1
    }, {
        "name": "innerCircle",
        "value": 0
    }]

    return (
        <div className='score-chart'>
            <p className='piechart_title'>Score</p>
            <div className='piechart_legend'>
                <strong>{100 * score + '%'}</strong>
                <p>de votre objectif</p>
            </div>
            <ResponsiveContainer className="piechart" width='100%' height='100%'>
                <PieChart backgroundColor='#FBFBFB'>
                    <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={70} outerRadius={80} fill="#FF0000" startAngle={220} endAngle={-140} />
                    <Pie data={innerCircle} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={0} outerRadius={70} fill="#FFF" />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Score;
import React from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, ResponsiveContainer, Legend } from 'recharts';
import classes from '../styles/Score.module.css'
import getUser from '../utils/getUser';

function Score({userId}) {


    const data = getUser(userId);
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
        <div className={classes.score_chart}>
            <p className={classes.piechart_title}>Score</p>
            <div className={classes.piechart_legend}>
                <strong>{100 * score + '%'}</strong>
                <p>de votre objectif</p>
            </div>
            <ResponsiveContainer className={classes.piechart} width='100%' height='100%'>
                <PieChart style={{backgroundColor: '#FBFBFB'}}>
                    <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={70} outerRadius={80} fill="#FF0000" startAngle={220} endAngle={-140} />
                    <Pie data={innerCircle} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={0} outerRadius={70} fill="#FFFFFF" />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

Score.prototypes = {
    userId: PropTypes.string.isRequired
}

export default Score;
import React from 'react';
import PropTypes from 'prop-types';
import energyIcon from '../assets/energy.svg';
import chickenIcon from '../assets/chicken.svg';
import appleIcon from '../assets/apple.svg';
import cheeseburgerIcon from '../assets/cheeseburger.svg';
import classes from '../styles/KeyDataCardsContainer.module.css';
import KeyDataCard from './KeyDataCard';

function KeyDataCardsContainer({ data}) {

    let carbohydrateCount = 0;
    let calorieCount = 0;
    let lipidCount = 0;
    let proteinCount = 0;
    if (data) {
        carbohydrateCount = data.data.keyData.carbohydrateCount;
        calorieCount = data.data.keyData.calorieCount;
        lipidCount = data.data.keyData.lipidCount;
        proteinCount = data.data.keyData.proteinCount;
    }
    return (
        <div className={classes.dashboard_graphs_info_cards}>
            <KeyDataCard count={calorieCount} unit="kCal" type="Calories" color="rgba(255, 0, 0, 0.066)" icon={energyIcon} />
            <KeyDataCard count={proteinCount} unit="g" type="Proteines" color="rgba(74, 184, 255, 0.066)" icon={chickenIcon} />
            <KeyDataCard count={carbohydrateCount} unit="g" type="Glucides" color="rgba(249, 206, 35, 0.066)" icon={appleIcon} />
            <KeyDataCard count={lipidCount} unit="g" type="Lipides" color="rgba(253, 81, 129, 0.066)" icon={cheeseburgerIcon} />
        </div>
    )
}

KeyDataCardsContainer.prototypes = {
    data: PropTypes.object.isRequired
}

export default KeyDataCardsContainer;

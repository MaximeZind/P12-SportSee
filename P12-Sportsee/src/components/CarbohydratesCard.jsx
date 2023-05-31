import React, { useState, useEffect } from 'react';
import appleIcon from '../assets/apple.svg';
import classes from '../styles/KeyDataCard.module.css'

function CarbohydratesCard(props) {

    const userId = props.id;
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/user/${userId}`)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }, []);
    let carbohydrateCount = 0;
    if(data){
        carbohydrateCount = data.data.keyData.carbohydrateCount;
    }
    return (
        <div className={classes.keydata_card}>
            <div className={`${classes.keydata_card_icon} ${classes.carbohydrate_box}`}>
                <img src={appleIcon} alt="glucides"></img>
            </div>
            <div className={classes.keydata_card_text_content}>
                <strong>{carbohydrateCount}g</strong>
                <p>Glucides</p>
            </div>
        </div>
    )
}

export default CarbohydratesCard;

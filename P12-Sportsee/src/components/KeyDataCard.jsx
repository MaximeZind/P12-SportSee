import React from 'react';
import classes from '../styles/KeyDataCard.module.css'

function KeyDataCard({count, unit, type, color, icon}) {
    return (
        <div className={classes.keydata_card}>
            <div className={classes.keydata_card_icon} style={{backgroundColor: color}}>
                <img src={icon} alt={type}></img>
            </div>
            <div className={classes.keydata_card_text_content}>
                <strong>{count}{unit}</strong>
                <p>{type}</p>
            </div>
        </div>
    )
}

export default KeyDataCard;

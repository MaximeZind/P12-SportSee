import React, { useState, useEffect } from 'react';
import chickenIcon from '../assets/chicken.svg';
import classes from '../styles/KeyDataCard.module.css'

function ProteinsCard(props) {

    const userId = props.id;
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/user/${userId}`)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }, []);
    let proteinCount = 0;
    if(data){
        proteinCount = data.data.keyData.proteinCount;
    }
    return (
        <div className={classes.keydata_card}>
            <div className={`${classes.keydata_card_icon} ${classes.proteins_box}`}>
                <img src={chickenIcon} alt="proteines"></img>
            </div>
            <div className={classes.keydata_card_text_content}>
                <strong>{proteinCount}g</strong>
                <p>Proteines</p>
            </div>
        </div>
    )
}

export default ProteinsCard;

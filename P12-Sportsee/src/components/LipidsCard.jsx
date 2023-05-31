import React, { useState, useEffect } from 'react';
import cheeseburgerIcon from '../assets/cheeseburger.svg';
import classes from '../styles/KeyDataCard.module.css'

function LipidsCard(props) {

    const userId = props.id;
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/user/${userId}`)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }, []);
    let lipidCount = 0;
    if(data){
        lipidCount = data.data.keyData.lipidCount;
    }
    return (
        <div className={classes.keydata_card}>
            <div className={`${classes.keydata_card_icon} ${classes.lipid_box}`}>
                <img src={cheeseburgerIcon} alt="lipides"></img>
            </div>
            <div className={classes.keydata_card_text_content}>
                <strong>{lipidCount}g</strong>
                <p>Lipides</p>
            </div>
        </div>
    )
}

export default LipidsCard;

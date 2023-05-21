import React, { useState, useEffect } from 'react';
import energyIcon from '../assets/energy.svg';
import '../styles/KeyDataCard.css'

function CaloriesCard(props) {

    const userId = props.id;
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/user/${userId}`)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }, []);
    let calorieCount = 0;
    if(data){
        calorieCount = data.data.keyData.calorieCount;
    }
    return (
        <div className='keydata_card'>
            <div className='keydata_card-icon calories_box'>
                <img src={energyIcon} alt="calories"></img>
            </div>
            <div className='keydata_card-text_content'>
                <strong>{calorieCount}kCal</strong>
                <p>Calories</p>
            </div>
        </div>
    )
}

export default CaloriesCard;

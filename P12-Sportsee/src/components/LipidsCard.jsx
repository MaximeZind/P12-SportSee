import React, { useState, useEffect } from 'react';
import cheeseburgerIcon from '../assets/cheeseburger.svg';
import '../styles/KeyDataCard.css'

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
        <div className='keydata_card'>
            <div className='keydata_card-icon lipid_box'>
                <img src={cheeseburgerIcon} alt="lipides"></img>
            </div>
            <div className='keydata_card-text_content'>
                <strong>{lipidCount}g</strong>
                <p>Lipides</p>
            </div>
        </div>
    )
}

export default LipidsCard;

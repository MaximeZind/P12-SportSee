import React, { useState, useEffect } from 'react';
import '../styles/Greetings.css'

function Greetings(props) {

    const userId = props.id;
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/user/${userId}`)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className='greetings'>
            <div className='greetings_title'>
                <h2 className='greetings_title-bonjour'>Bonjour </h2>
                {data && <h2 className='greetings_title-name'>{data.data.userInfos.firstName}</h2>}
            </div>
            {data && <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>}
        </div>
    )
}

export default Greetings;

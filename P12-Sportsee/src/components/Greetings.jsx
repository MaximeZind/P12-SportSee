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
            {data && <h2 className='greetings_title'>Bonjour {data.data.userInfos.firstName}</h2>}
            {data && <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>}
        </div>
    )
}

export default Greetings;

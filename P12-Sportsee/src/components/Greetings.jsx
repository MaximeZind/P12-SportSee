import React from 'react';
import PropTypes from 'prop-types';
import classes from '../styles/Greetings.module.css'

function Greetings({ data }) {
    return (
        <div className={classes.greetings}>
            <div className={classes.greetings_title}>
                <h2 className={classes.greetings_title_bonjour}>Bonjour </h2>
                {data && <h2 className={classes.greetings_title_name}>{data.data.userInfos.firstName}</h2>}
            </div>
            {data && <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>}
        </div>
    )
}

Greetings.prototypes = {
    data: PropTypes.object.isRequired
}

export default Greetings;

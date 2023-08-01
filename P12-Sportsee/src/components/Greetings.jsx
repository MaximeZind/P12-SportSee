import React from 'react';
import PropTypes from 'prop-types';
import classes from '../styles/Greetings.module.css';

/**
 * Le composant Greetings affiche un message de salutation personnalisé et une félicitation si le prénom de l'utilisateur est fourni.
 * @param {string} firstName - Le prénom de l'utilisateur.
 * @returns {JSX.Element} La représentation JSX du composant Greetings.
 */

function Greetings({ firstName }) {
    return (
        <div className={classes.greetings}>
            <div className={classes.greetings_title}>
                <h2 className={classes.greetings_title_bonjour}>Bonjour </h2>
                {firstName && <h2 className={classes.greetings_title_name}>{firstName}</h2>}
            </div>
            {firstName && <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>}
        </div>
    )
}

Greetings.propTypes = {
    firstName: PropTypes.string.isRequired
}

export default Greetings;

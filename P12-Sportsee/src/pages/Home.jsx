import React from 'react';
import classes from '../styles/Home.module.css'
import Form from '../components/Form';
import logo from '../assets/SportSee.png';

/**
 * Composant Home - Représente la page d'accueil de l'application SportSee. 
 * Ce composant affiche le logo de l'application et un formulaire de sélection de la source de données. 
 * Le titre de la page est mis à jour avec "SportSee - Accueil". 
 * Renvoie l'élément JSX représentant la page d'accueil.
 * @module Home
 * @returns {JSX.Element} Élément JSX représentant la page d'accueil.
 */

function Home() {

    const pageTitle = 'Home';
    document.title = `SportSee - ${pageTitle}`;

    return (
        <main className={classes.home}>
            <section className={classes.home_section}>
                <div className={classes.home_logo}>
                    <img src={logo} alt="Sportsee Logo"></img>
                    <h1>SportSee</h1>
                </div>
                <Form />
            </section>
        </main>
    )
}

export default Home;
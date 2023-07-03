import React from 'react';
import classes from '../styles/Dashboard.module.css'
import Form from '../components/Form';
import logo from '../assets/SportSee.png';



function Home() {

    const pageTitle = 'Home';
    document.title = `SportSee - ${pageTitle}`;

    return (
        <main className={classes.home}>
            <div className={classes.home_logo}>
                <img src={logo} alt="Sportsee Logo"></img>
                <h1>SportSee</h1>
            </div>
            <Form />
        </main>
    )
}

export default Home;
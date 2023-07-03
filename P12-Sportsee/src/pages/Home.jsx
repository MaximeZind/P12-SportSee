import React from 'react';
import classes from '../styles/Home.module.css'
import Form from '../components/Form';
import logo from '../assets/SportSee.png';



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
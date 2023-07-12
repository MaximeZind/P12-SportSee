import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Greetings from '../components/Greetings';
import DailyActivity from '../components/graphs/DailyActivity';
import AverageSessionTime from '../components/graphs/AverageSessionTime';
import Performances from '../components/graphs/Performances';
import Score from '../components/graphs/Score';
import classes from '../styles/Dashboard.module.css'
import KeyDataCardsContainer from '../components/KeyDataCardsContainer';
import getProfile from '../service/userRequest';


function Dashboard() {

  const [userModel, setUserModel] = useState(null);
  //récupération de l'id de l'url
  const {id} = useParams();
  
  //titre de la page
  const pageTitle = 'Dashboard';
  document.title = `SportSee - ${pageTitle}`;


  // const userModel = getProfile(id)
  useEffect(() => {
    getProfile(id)
    .then((model) => setUserModel(model))
    .catch((err) => console.log(err));
  }, [id]);


  return (
    userModel &&
    <div className={classes.dashboard}>
      < Greetings firstName={userModel.firstName} />
      <section className={classes.dashboard_graphs} >
        < DailyActivity sessions={userModel.dailyActivity}/>
        < AverageSessionTime sessions={userModel.sessionLength} />
        < Performances performances={userModel.performances} />
        < Score todayScore={userModel.score} />
        < KeyDataCardsContainer calorieCount={userModel.calorieCount} proteinCount={userModel.proteinCount} carbohydrateCount={userModel.carbohydrateCount} lipidCount={userModel.lipidCount} />
      </section>
    </div>
  )
}

export default Dashboard;

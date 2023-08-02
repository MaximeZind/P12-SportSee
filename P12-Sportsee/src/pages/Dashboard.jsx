import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Greetings from '../components/Greetings';
import DailyActivity from '../components/graphs/DailyActivity';
import AverageSessionTime from '../components/graphs/AverageSessionTime';
import Performances from '../components/graphs/Performances';
import Score from '../components/graphs/Score';
import classes from '../styles/Dashboard.module.css'
import KeyDataCardsContainer from '../components/KeyDataCardsContainer';
import getProfile from '../service/userRequest';

/**
 * Composant Dashboard - Représente la page du tableau de bord de l'utilisateur.
 * 
 * Ce composant affiche la page du tableau de bord de l'utilisateur SportSee.
 * Il récupère les informations de l'utilisateur en utilisant l'ID de l'URL,
 * puis affiche différentes visualisations de données telles que l'activité quotidienne,
 * la durée moyenne des sessions, les performances, le score du jour, ainsi que des cartes de données clés.
 * Le titre de la page est mis à jour avec "SportSee - Dashboard".
 * 
 * @module Dashboard
 * @returns {JSX.Element} Élément JSX représentant la page du tableau de bord de l'utilisateur.
 */


function Dashboard() {

  const navigate = useNavigate();
  const [userModel, setUserModel] = useState(null);
  //récupération de l'id de l'url
  const { id } = useParams();

  //titre de la page
  const pageTitle = 'Dashboard';
  document.title = `SportSee - ${pageTitle}`;


  //récupération du userModel
  useEffect(() => {
    getProfile(id)
      .then((model) => {
        setUserModel(model)
      })
      .catch((err) => {
        console.log(err);
        return navigate('/404');
      });
  }, []);

  return (
    userModel &&
    <div className={classes.dashboard}>
      < Greetings firstName={userModel.firstName} />
      <section className={classes.dashboard_graphs} >
        < DailyActivity sessions={userModel.dailyActivity} />
        < AverageSessionTime sessions={userModel.sessionLength} />
        < Performances performances={userModel.performances} />
        < Score todayScore={userModel.score} />
        < KeyDataCardsContainer calorieCount={userModel.calorieCount} proteinCount={userModel.proteinCount} carbohydrateCount={userModel.carbohydrateCount} lipidCount={userModel.lipidCount} />
      </section>
    </div>
  )
}

export default Dashboard;

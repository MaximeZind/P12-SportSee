import React from 'react';
import { useParams } from 'react-router-dom';
import Greetings from '../components/Greetings';
import DailyActivity from '../components/graphs/DailyActivity';
import AverageSessionTime from '../components/graphs/AverageSessionTime';
import Performances from '../components/graphs/Performances';
import Score from '../components/graphs/Score';
import classes from '../styles/Dashboard.module.css'
import KeyDataCardsContainer from '../components/KeyDataCardsContainer';
import GetUser from '../service/getUser';
import GetUserActivity from '../service/getUserActivity';
import GetUserAverageSessions from '../service/getUserAverageSessions';
import GetUserPerformance from '../service/getUserPerformance';


function Dashboard() {

  //récupération de l'id et de la source des datas
  const {id, api } = useParams();
  const isApiTrue = (api === 'true');

  //Appel des données utilitaires pour la récupération des datas, avec comme paramètres l'id de l'utilisateur
  //et "isApitrue", booléen, pour définir d'où vient la data (api ou mocked data)
  const user = GetUser(id, isApiTrue);
  const userActivity = GetUserActivity(id, isApiTrue);
  const userAverageSessions = GetUserAverageSessions(id, isApiTrue);
  const userPerformance = GetUserPerformance(id, isApiTrue);

  //titre de la page
  const pageTitle = 'Dashboard';
  document.title = `SportSee - ${pageTitle}`;

  return (
    <div className={classes.dashboard}>
      < Greetings data={user} />
      <section className={classes.dashboard_graphs} >
        < DailyActivity data={userActivity}/>
        < AverageSessionTime data={userAverageSessions} />
        < Performances data={userPerformance} />
        < Score data={user} />
        < KeyDataCardsContainer data={user} />
      </section>
    </div>
  )
}

export default Dashboard;

import React from 'react';
import { useParams } from 'react-router-dom';
import Greetings from '../components/Greetings';
import DailyActivity from '../components/DailyActivity';
import AverageSessionTime from '../components/AverageSessionTime';
import Performances from '../components/Performances';
import Score from '../components/Score';
import classes from '../styles/Dashboard.module.css'
import KeyDataCardsContainer from '../components/KeyDataCardsContainer';
import GetUser from '../utils/getUser';
import GetUserActivity from '../utils/getUserActivity';
import GetUserAverageSessions from '../utils/getUserAverageSessions';
import GetUserPerformance from '../utils/getUserPerformance';


function Dashboard() {

  const {id, api } = useParams();
  const isApiTrue = (api === 'true');

  const user = GetUser(id, isApiTrue);
  const userActivity = GetUserActivity(id, isApiTrue);
  const userAverageSessions = GetUserAverageSessions(id, isApiTrue);
  const userPerformance = GetUserPerformance(id, isApiTrue);

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

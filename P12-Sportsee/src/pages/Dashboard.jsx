import React from 'react';
import { useParams } from 'react-router-dom';
import Greetings from '../components/Greetings';
import DailyActivity from '../components/DailyActivity';
import AverageSessionTime from '../components/AverageSessionTime';
import Performances from '../components/Performances';
import Score from '../components/Score';
import classes from '../styles/Dashboard.module.css'
import KeyDataCardsContainer from '../components/KeyDataCardsContainer';


function Dashboard() {

  const userId = useParams().id;
  const pageTitle = 'Dashboard';
  document.title = `SportSee - ${pageTitle}`;

  return (
    <div className={classes.dashboard}>
      < Greetings userId={userId} />
      <section className={classes.dashboard_graphs}>
        < DailyActivity userId={userId} />
        < AverageSessionTime userId={userId} />
        < Performances userId={userId}/>
        < Score userId={userId}/>
        < KeyDataCardsContainer userId={userId} />
      </section>
    </div>
  )
}

export default Dashboard;

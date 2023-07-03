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

  const {id, api } = useParams();
  console.log(id);
  console.log(api);
  const pageTitle = 'Dashboard';
  document.title = `SportSee - ${pageTitle}`;

  return (
    <div className={classes.dashboard}>
      < Greetings userId={id} api={api === 'true'}/>
      <section className={classes.dashboard_graphs} >
        < DailyActivity userId={id} api={api === 'true'}/>
        < AverageSessionTime userId={id} api={api === 'true'}/>
        < Performances userId={id} api={api === 'true'}/>
        < Score userId={id} api={api === 'true'}/>
        < KeyDataCardsContainer userId={id} api={api === 'true'}/>
      </section>
    </div>
  )
}

export default Dashboard;

import React from 'react';
import { useParams } from 'react-router-dom';
import Greetings from '../components/Greetings';
import DailyActivity from '../components/DailyActivity';
import AverageSessionTime from '../components/AverageSessionTime';
import Performances from '../components/Performances';
import Score from '../components/Score';
import classes from '../styles/Dashboard.module.css'
// import CaloriesCard from '../components/CaloriesCard';
// import ProteinsCard from '../components/ProteinsCard';
// import CarbohydratesCard from '../components/CarbohydratesCard';
// import LipidsCard from '../components/LipidsCard';
import KeyDataCardsContainer from '../components/KeyDataCardsContainer';


function Dashboard() {

  const userId = useParams().id;

  return (
    <div className={classes.dashboard}>
      < Greetings id={userId} />
      <section className={classes.dashboard_graphs}>
        < DailyActivity id={userId} />
        < AverageSessionTime id={userId} />
        < Performances id={userId}/>
        < Score id={userId}/>
        < KeyDataCardsContainer userId={userId} />
        {/* <div className={classes.dashboard_graphs_info_cards}>
          <CaloriesCard id={userId}/>
          <ProteinsCard id={userId}/>
          <CarbohydratesCard id={userId}/>
          <LipidsCard id={userId}/>
        </div> */}
      </section>
    </div>
  )
}

export default Dashboard;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Greetings from '../components/Greetings';
import DailyActivity from '../components/DailyActivity';
import AverageSessionTime from '../components/AverageSessionTime';
import Performances from '../components/Performances';
import Score from '../components/Score';
import '../styles/Dashboard.css'


function Dashboard() {

  const userId = useParams().id;

  return (
    <div className='dashboard'>
      < Greetings id={userId} />
      <section className='dashboard_graphs'>
        < DailyActivity id={userId} />
        < AverageSessionTime id={userId} />
        < Performances id={userId}/>
        < Score id={userId}/>
        <div className='dashboard_graphs-info_cards'>

        </div>
      </section>
    </div>
  )
}

export default Dashboard;

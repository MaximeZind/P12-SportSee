import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Greetings from '../components/Greetings';
import DailyActivity from '../components/DailyActivity';
import '../styles/Dashboard.css'
import AverageSessionTime from '../components/AverageSessionTime';
import Performances from '../components/Performances';

function Dashboard() {

  const userId = useParams().id;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/user/${userId}/average-sessions`)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  // data && console.log(data);

  return (
    <div className='dashboard'>
      < Greetings id={userId} />
      <section className='dashboard_graphs'>
        < DailyActivity id={userId} />
        < AverageSessionTime id={userId} />
        < Performances id={userId}/>
        <div className='dashboard_graphs-info_cards'>

        </div>
      </section>
    </div>
  )
}

export default Dashboard;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DailyActivity from '../components/DailyActivity';
import '../styles/Dashboard.css'

function Dashboard() {

  const userId = useParams().id;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/user/${userId}/average-sessions`)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  data && console.log(data);

  return (
    <div className='dashboard'>
      <section className='dashboard_graphs'>
        < DailyActivity id={userId} />
      </section>
    </div>
  )
}

export default Dashboard;

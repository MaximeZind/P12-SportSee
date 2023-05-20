import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SideMenu from '../components/SideMenu';
import DailyActivity from '../components/DailyActivity';
import '../styles/Dashboard.css'

function Dashboard() {

  const userId = useParams().id;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/user/${userId}`)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
    <main className='dashboard'>
      < SideMenu />
      <section className='dashboard_graphs'>
        < DailyActivity id={userId} />
      </section>
    </main>
  )
}

export default Dashboard;

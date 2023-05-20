import React from 'react'
import ReactDOM from 'react-dom/client'
import Banner from './components/Banner.jsx'
import Dashboard from './pages/Dashboard.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Banner />
    <Dashboard />
  </React.StrictMode>,
)

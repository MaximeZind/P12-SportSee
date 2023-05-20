import React from 'react';
import ReactDOM from 'react-dom/client';
import Banner from './components/Banner.jsx';
import Dashboard from './pages/Dashboard.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Banner />
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard/:id" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

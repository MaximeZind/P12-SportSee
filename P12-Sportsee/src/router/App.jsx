import React from 'react';
import Dashboard from '../pages/Dashboard.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BaseLayout from './BaseLayout.jsx';
import Home from '../pages/Home.jsx';
import Error from '../pages/Error.jsx';

/**
 * Composant App - Le composant racine de l'application.
 * Gère le routage à l'aide de react-router-dom pour afficher différentes pages.
 * @returns {JSX.Element} La représentation JSX du composant App.
 */


function App() {

    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path='/dashboard' element={<BaseLayout />} >
                        <Route path="/dashboard/:id/" element={<Dashboard />} />
                    </Route>
                    <Route path="/*" element={<Error />} />
                    <Route path='/' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}


export default App;
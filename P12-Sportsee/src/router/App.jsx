import React from 'react';
import Dashboard from '../pages/Dashboard.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BaseLayout from './BaseLayout.jsx';
import Home from '../pages/Home.jsx';

function App() {

    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path='/dashboard' element={<BaseLayout />} >
                        <Route path="/dashboard/:id/:api" element={<Dashboard />} />
                    </Route>
                    <Route path='/' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}


export default App;
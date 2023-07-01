import React from 'react';
import Dashboard from '../pages/Dashboard.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BaseLayout from './BaseLayout.jsx';

function App() {

    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<BaseLayout />} >
                        <Route path="/dashboard/:id" element={<Dashboard />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}


export default App;
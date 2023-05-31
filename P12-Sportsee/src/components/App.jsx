import React from 'react';
import Banner from './Banner.jsx'
import SideMenu from './SideMenu.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

    return (
        <React.Fragment>
            <Banner />
            <main>
                <SideMenu />
                <BrowserRouter>
                    <Routes>
                        <Route path="/dashboard/:id" element={<Dashboard />} />
                    </Routes>
                </BrowserRouter>
            </main>
        </React.Fragment>
    )
}


export default App;
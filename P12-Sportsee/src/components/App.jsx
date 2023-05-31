import React from 'react';
import Dashboard from '../pages/Dashboard.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BaseLayout from './BaseLayout.jsx';

function App() {

    return (
        <React.Fragment>
            <BaseLayout>
                <BrowserRouter>
                    <Routes>
                        <Route path="/dashboard/:id" element={<Dashboard />} />
                    </Routes>
                </BrowserRouter>
            </BaseLayout>
        </React.Fragment>
    )
}


export default App;
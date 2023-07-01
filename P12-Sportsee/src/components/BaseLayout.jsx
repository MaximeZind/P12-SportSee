import React from 'react';
import Banner from './Banner.jsx'
import SideMenu from './SideMenu.jsx';
import {Outlet} from "react-router-dom";

function BaseLayout() {

    return (
        <>
            <Banner />
            <main>
                <SideMenu />
                < Outlet />
            </main>
        </>
    );
}


export default BaseLayout;
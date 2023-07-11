import React from 'react';
import Nav from '../components/Nav';
import SideMenu from '../components/SideMenu';
import {Outlet} from "react-router-dom";

function BaseLayout() {

    return (
        <>
            <Nav />
            <main>
                <SideMenu />
                < Outlet />
            </main>
        </>
    );
}


export default BaseLayout;
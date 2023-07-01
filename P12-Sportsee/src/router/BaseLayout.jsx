import React from 'react';
import Banner from '../components/Banner';
import SideMenu from '../components/SideMenu';
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
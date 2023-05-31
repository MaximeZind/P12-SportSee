import React from 'react';
import Banner from './Banner.jsx'
import SideMenu from './SideMenu.jsx';

function BaseLayout({children}) {

    return (
        <React.Fragment>
            <Banner />
            <main>
                <SideMenu />
                {children}
            </main>
        </React.Fragment>
    );
}


export default BaseLayout;
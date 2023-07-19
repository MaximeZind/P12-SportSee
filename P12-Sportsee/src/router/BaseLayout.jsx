import React from 'react';
import Nav from '../components/Nav';
import SideMenu from '../components/SideMenu';
import {Outlet} from "react-router-dom";

/**
 * Composant BaseLayout - Affiche la mise en page de base de l'application avec la barre de navigation, le menu latéral et le contenu de la page enfant (Outlet).
 * @returns {JSX.Element} La représentation JSX du composant BaseLayout.
 */


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
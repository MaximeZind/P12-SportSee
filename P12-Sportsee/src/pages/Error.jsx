import React from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import classes from '../styles/Error.module.css'


function Error() {


  let location = useLocation();

  //titre de la page
  const pageTitle = 'Error 404';
  document.title = `SportSee - ${pageTitle}`;
  const errorText = `Oups! La page que vous demandez n'existe pas.`;
  const linkText = "Retourner à la page d'accueil";

  return (
    (location.pathname === '/404') ?
    <div className={classes.error}>
        <h1>#404</h1>
        <p>{errorText}</p>
        <Link to={'/'}><p>{linkText}</p></Link>
    </div> : <Navigate to={'/404'}/>
    
  )
}

export default Error;
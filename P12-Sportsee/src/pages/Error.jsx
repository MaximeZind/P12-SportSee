import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../styles/Error.module.css'


function Error() {

  //titre de la page
  const pageTitle = 'Error 404';
  document.title = `SportSee - ${pageTitle}`;
  const errorText = `Oups! La page que vous demandez n'existe pas.`;
  const linkText = "Retourner à la page d'accueil";

  return (
    <div className={classes.error}>
        <h1>#404</h1>
        <p>{errorText}</p>
        <Link to={'/'}><p>{linkText}</p></Link>
    </div>
  )
}

export default Error;
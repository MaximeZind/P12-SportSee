import React from 'react';
import ReactDOM from 'react-dom/client';
import classes from './styles/index.module.css'
import App from './router/App';

/**
 * @description <caption>README</caption>
 * {@tutorial src/README.md}
 *
 * @module index
 * @see {@link https://link-to-your-source-code.com}
 */

/**
 * Fichier d'entrée principal de l'application React.
 * Initialise le rendu de l'application dans l'élément HTML avec l'ID 'root'.
 */



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < App />
  </React.StrictMode>
)

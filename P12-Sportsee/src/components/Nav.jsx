import logo from "../assets/Sportsee.png";
import classes from "../styles/Banner.module.css";
import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <header className={classes.banner}>
            <NavLink to="/">
                <div className={classes.banner_logo}>
                    <img src={logo} alt="Sportsee Logo" className={classes.banner_logo_pic}></img>
                    <h1>SportSee</h1>
                </div>
            </NavLink>
            <nav className={classes.banner_nav}>
                <ul className={classes.banner_nav_links}>
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">Profil</a></li>
                    <li><a href="#">Réglage</a></li>
                    <li><a href="#">Communauté</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
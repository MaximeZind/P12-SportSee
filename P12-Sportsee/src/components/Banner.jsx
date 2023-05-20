import logo from "../assets/Sportsee.png";
import "../styles/Banner.css";

function Banner() {
    return (
        <header className="banner">
            <div className="banner_logo">
                <img src={logo} alt="Sportsee Logo" className="banner_logo-pic"></img>
                <h1>SportSee</h1>
            </div>
            <nav className="banner_nav">
                <ul className="banner_nav-links">
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">Profil</a></li>
                    <li><a href="#">Réglage</a></li>
                    <li><a href="#">Communauté</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Banner;
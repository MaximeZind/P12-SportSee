import classes from "../styles/SideMenu.module.css";
import yogaIcon from "../assets/yoga.png";
import swimmingIcon from "../assets/swimming.png";
import cyclingIcon from "../assets/cycling.png";
import workoutIcon from "../assets/workout.png";

/**
 * Composant SideMenu - Affiche un menu latéral avec des boutons d'icônes pour différentes activités sportives et le copyright.
 * @returns {JSX.Element} La représentation JSX du composant SideMenu.
 */


function SideMenu() {
    return (
        <div className={classes.sidemenu}>
            <div className={classes.sidemenu_buttons}>
                <a href="#">
                    <img className={classes.sidemenu_buttons_icon} src={yogaIcon}></img>
                </a>
                <a href="#">
                    <img className={classes.sidemenu_buttons_icon} src={swimmingIcon}></img>
                </a>
                <a href="#">
                    <img className={classes.sidemenu_buttons_icon} src={cyclingIcon}></img>
                </a>
                <a href="#">
                    <img className={classes.sidemenu_buttons_icon} src={workoutIcon}></img>
                </a>
            </div>
            <div className={classes.sidemenu_copyright}>
                <p>Copyright, SportSee 2020</p>
            </div>
        </div>
    );
}

export default SideMenu;
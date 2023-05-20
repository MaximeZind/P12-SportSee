import "../styles/SideMenu.css";
import yogaIcon from "../assets/yoga.png";
import swimmingIcon from "../assets/swimming.png";
import cyclingIcon from "../assets/cycling.png";
import workoutIcon from "../assets/workout.png";

function SideMenu() {
    return (
        <div className="sidemenu">
            <div className="sidemenu_spaceholder"></div>
            <div className="sidemenu_buttons">
                <a href="#">
                    <img className="sidemenu_buttons-icon" src={yogaIcon}></img>
                </a>
                <a href="#">
                    <img className="sidemenu_buttons-icon" src={swimmingIcon}></img>
                </a>
                <a href="#">
                    <img className="sidemenu_buttons-icon" src={cyclingIcon}></img>
                </a>
                <a href="#">
                    <img className="sidemenu_buttons-icon" src={workoutIcon}></img>
                </a>
            </div>
            <p className="sidemenu_copyright">Copyright, SportSee 2020</p>
        </div>
    );
}

export default SideMenu;
import classes from "../styles/Form.module.css";
import { useNavigate } from "react-router-dom";

function Form() {
    const navigate = useNavigate();
    function handleSubmit(event){
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        return navigate(`/dashboard/${formJson.user}/${formJson.api}`);
    }

    return (
        <form method="post" className={classes.form} onSubmit={handleSubmit}>
            <p className={classes.form_radiobuttons} >
                Source des données:
                <label>
                    <input type="radio" name="api" value='true' defaultChecked={true}/>
                    API
                </label>
                <label>
                    <input type="radio" name="api" value='false' />
                    Mocked Data
                </label>
            </p>
            <p className={classes.form_radiobuttons}>
                ID de l'utilisateur:
                <label>
                    <input type="radio" name="user" value="12" defaultChecked={true}/>
                    12
                </label>
                <label>
                    <input type="radio" name="user" value="18" />
                    18
                </label>
            </p>
            <button className={classes.form_submitbutton}>C'est parti</button>
        </form>
    );
}

export default Form;
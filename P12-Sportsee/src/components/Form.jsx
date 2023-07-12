import classes from "../styles/Form.module.css";
import { useNavigate } from "react-router-dom";

function Form() {
    const navigate = useNavigate();

    //fonction appelée lors de la soumission du formulaire
    function handleSubmit(event){
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        if (formJson.api === 'true'){
            localStorage.setItem("dataSrc", 'api');
        } else if (formJson.api === 'false'){
            localStorage.setItem("dataSrc", 'mockedData');
        }
        return navigate(`/dashboard/${formJson.user}/`);
    }

    return (
        <form method="post" className={classes.form} onSubmit={handleSubmit}>
            <p className={classes.form_radiobuttons} >
                <strong>Source des données:</strong>
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
                <strong>ID de l'utilisateur:</strong>
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
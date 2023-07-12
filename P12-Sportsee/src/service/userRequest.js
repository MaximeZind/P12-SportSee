import UserModel from './Model/UserModel';
import axios from 'axios';

async function getUser(id) {

    const isApiTrue = localStorage.getItem("isApiTrue");

        if (isApiTrue === 'true') {
            const dataResponse = await axios.get(`http://localhost:3000/user/${id}`);
            if (dataResponse.status === 200) {
                return dataResponse.data.data;
            }
        } else if (isApiTrue === 'false') {

        }
}

async function getUserActivity(id) {

    const isApiTrue = localStorage.getItem("isApiTrue");

        if (isApiTrue === 'true') {
            const dataResponse = await axios.get(`http://localhost:3000/user/${id}/activity`);
            if (dataResponse.status === 200) {
                return dataResponse.data.data;
            }
        } else if (isApiTrue === 'false') {

        }
}

async function getUserAverageSessions(id) {

    const isApiTrue = localStorage.getItem("isApiTrue");

        if (isApiTrue === 'true') {
            const dataResponse = await axios.get(`http://localhost:3000/user/${id}/average-sessions`);
            if (dataResponse.status === 200) {
                return dataResponse.data.data;
            }
        } else if (isApiTrue === 'false') {

        }
}

async function getUserPerformance(id) {

    const isApiTrue = localStorage.getItem("isApiTrue");

        if (isApiTrue === 'true') {
            const dataResponse = await axios.get(`http://localhost:3000/user/${id}/performance`);
            if (dataResponse.status === 200) {
                return dataResponse.data.data;
            }
        } else if (isApiTrue === 'false') {

        }
}

export default async function getProfile(userId){

    try {
        const user = await getUser(userId);
        const userActivity = await getUserActivity(userId);
        const userAverageSessions = await getUserAverageSessions(userId);
        const userPerformance = await getUserPerformance(userId);

        //traduction des types de data et on combine les types avec les valeurs;
        const PerformancesTranslation = {
            cardio: "Cardio",
            energy: "Energie",
            endurance: "Endurance",
            strength: "Force",
            speed: "Vitesse",
            intensity: "Intensité"
        };
        const combinedPerformances = userPerformance.data.map(obj => {
            return {
              value: obj.value,
              kind: PerformancesTranslation[userPerformance.kind[obj.kind]]
            };
          });

          //création d'une nouvelle itération de la classe userModel
        const userModel = new UserModel(user, userActivity, userAverageSessions, combinedPerformances);

        return userModel;
    } catch (error) {
        console.error(error);
    }
}


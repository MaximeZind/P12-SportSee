import axios from 'axios';
import UserModel from './Model/UserModel';

// mocked data user 12
import user12Infos from '/src/mockedData/users/12/userInfos.json';
import user12AverageSessions from '/src/mockedData/users/12/userAverageSessions.json';
import user12Activity from '/src/mockedData/users/12/userActivity.json';
import user12Performance from '/src/mockedData/users/12/userPerformance.json';

// mocked data user 18
import user18Infos from '/src/mockedData/users/18/userInfos.json';
import user18AverageSessions from '/src/mockedData/users/18/userAverageSessions.json';
import user18Activity from '/src/mockedData/users/18/userActivity.json';
import user18Performance from '/src/mockedData/users/18/userPerformance.json';

/**
 * Obtient les informations d'un utilisateur à partir de la source de données spécifiée (API ou données simulées).
 * @param {string} id - L'identifiant de l'utilisateur.
 * @returns {Promise<Object>} Une promesse résolvant l'objet contenant les informations de l'utilisateur.
 */

async function getUser(id) {
  const dataSrc = localStorage.getItem('dataSrc');

  if (dataSrc === 'api') {
    const dataResponse = await axios.get(`http://localhost:3000/user/${id}`);
    if (dataResponse.status === 200) {
      return dataResponse.data.data;
    }
  } else if (dataSrc === 'mockedData') {
    if (id === '12') {
      return user12Infos.data;
    } if (id === '18') {
      return user18Infos.data;
    }
  }
}

/**
 * Obtient l'activité d'un utilisateur à partir de la source de données spécifiée (API ou données simulées).
 * @param {string} id - L'identifiant de l'utilisateur.
 * @returns {Promise<Object>} Une promesse résolvant l'objet contenant l'activité de l'utilisateur.
 */

async function getUserActivity(id) {
  const dataSrc = localStorage.getItem('dataSrc');

  if (dataSrc === 'api') {
    const dataResponse = await axios.get(`http://localhost:3000/user/${id}/activity`);
    if (dataResponse.status === 200) {
      return dataResponse.data.data;
    }
  } else if (dataSrc === 'mockedData') {
    if (id === '12') {
      return user12Activity.data;
    } if (id === '18') {
      return user18Activity.data;
    }
  }
}

/**
 * Obtient les sessions moyennes d'un utilisateur à partir de la source de données spécifiée (API ou données simulées).
 * @param {string} id - L'identifiant de l'utilisateur.
 * @returns {Promise<Object>} Une promesse résolvant l'objet contenant les sessions moyennes de l'utilisateur.
 */

async function getUserAverageSessions(id) {
  const dataSrc = localStorage.getItem('dataSrc');

  if (dataSrc === 'api') {
    const dataResponse = await axios.get(`http://localhost:3000/user/${id}/average-sessions`);
    if (dataResponse.status === 200) {
      return dataResponse.data.data;
    }
  } else if (dataSrc === 'mockedData') {
    if (id === '12') {
      return user12AverageSessions.data;
    } if (id === '18') {
      return user18AverageSessions.data;
    }
  }
}

/**
 * Obtient les performances d'un utilisateur à partir de la source de données spécifiée (API ou données simulées).
 * @param {string} id - L'identifiant de l'utilisateur.
 * @returns {Promise<Object>} Une promesse résolvant l'objet contenant les performances de l'utilisateur.
 */

async function getUserPerformance(id) {
  const dataSrc = localStorage.getItem('dataSrc');

  if (dataSrc === 'api') {
    const dataResponse = await axios.get(`http://localhost:3000/user/${id}/performance`);
    if (dataResponse.status === 200) {
      return dataResponse.data.data;
    }
  } else if (dataSrc === 'mockedData') {
    if (id === '12') {
      return user12Performance.data;
    } if (id === '18') {
      return user18Performance.data;
    }
  }
}

/**
 * Obtient le profil complet d'un utilisateur en combinant les informations utilisateur, l'activité, les sessions moyennes et les performances.
 * @param {string} userId - L'identifiant de l'utilisateur.
 * @returns {Promise<UserModel>} Une promesse résolvant l'objet UserModel contenant le profil complet de l'utilisateur.
 */

export default async function getProfile(userId) {
  try {
    const user = await getUser(userId);
    const userActivity = await getUserActivity(userId);
    const userAverageSessions = await getUserAverageSessions(userId);
    const userPerformance = await getUserPerformance(userId);

    // traduction des types de data et on combine les types avec les valeurs;
    const PerformancesTranslation = {
      cardio: 'Cardio',
      energy: 'Energie',
      endurance: 'Endurance',
      strength: 'Force',
      speed: 'Vitesse',
      intensity: 'Intensité',
    };
    const combinedPerformances = userPerformance.data.map((obj) => ({
      value: obj.value,
      kind: PerformancesTranslation[userPerformance.kind[obj.kind]],
    }));

    // création d'une nouvelle itération de la classe userModel
    const userModel = new UserModel(user, userActivity, userAverageSessions, combinedPerformances);

    return userModel;
  } catch (error) {
    console.error(error);
  }
}

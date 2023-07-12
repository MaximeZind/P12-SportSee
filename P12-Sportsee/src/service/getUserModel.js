import GetUser from './getUser';
import GetUserActivity from './getUserActivity';
import GetUserAverageSessions from './getUserAverageSessions';
import GetUserPerformance from './getUserPerformance';

class UserModel {
    constructor(id, userInfos, keyData, todayScore, sessions, performances) {
        this.id = id;
        this.userInfos = userInfos;
        this.keyData = keyData;
        this.todayScore = todayScore;
        this.sessions = sessions;
        this.performances = performances;
    }
}

export default async function getUserModel(userId){
    try {
        // const user = await GetUser(userId);
        const userActivity = await GetUserActivity(userId);
        // const userAverageSessions = await GetUserAverageSessions(userId).data;
        // const userPerformance = await GetUserPerformance(userId).data;
        console.log(userActivity);

        // userActivity.sessions = userActivity.sessions.map((session) => {
        //     session.day = session.day.length > 1 ? parseInt(session.day[session.day.length - 2] + session.day[session.day.length - 1]) : session.day;
        //     return session;
        // });

        return userActivity;
    } catch (error) {
        console.error(error);
    }
}


// export default async function GetUserModel(userId) {
//     try {
        // const user = await GetUser(userId);
        // const userActivity = await GetUserActivity(userId);
        // const userAverageSessions = await GetUserAverageSessions(userId);
        // const userPerformance = await GetUserPerformance(userId);
        // if (user && userActivity && userAverageSessions && userPerformance) {
            // userActivityPromise.sessions = userActivityPromise.sessions.map((session) => {
            //     session.day = session.day.length > 1 ? parseInt(session.day[session.day.length - 2] + session.day[session.day.length - 1]) : session.day;
            //     return session;
            // });

//             const sessions = userAverageSessionsPromise.sessions.map(session => {
//                 const metricsSession = userActivityPromise.find(ms => ms.day === session.day);
//                 return {
//                     day: session.day,
//                     sessionLength: session.sessionLength,
//                     kilogram: metricsSession ? metricsSession.kilogram : null,
//                     calories: metricsSession ? metricsSession.calories : null,
//                 };

//             });
//             const userModel = new UserModel(userPromise.id, userPromise.userInfos, userPromise.keyData, userPromise.todayScore)
//             console.log(userModel);
//             return userModel;
//         }
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }

// }


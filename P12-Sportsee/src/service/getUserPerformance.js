import { useState, useEffect } from "react";
import axios from "axios";

export default function GetUserPerformance(id) {

    const isApiTrue = localStorage.getItem("isApiTrue");
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            // const [data, setData] = useState(null);
            // Make a request for a user with a given ID
            if (isApiTrue === 'true') {
                axios.get(`http://localhost:3000/user/${id}/performance`)
                    .then(function (response) {
                        // handle success
                        setData(response.data)
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                    .finally(function () {
                        // always executed
                    });
            } else if (isApiTrue === 'false') {

                axios.get(`/src/mockedData/users/${id}/userPerformance.json`)
                    .then(function (response) {
                        // handle success
                        setData(response.data)
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                    .finally(function () {
                        // always executed
                    });
            }
        }
        fetchData();
    }, [id, isApiTrue]);

    return data;
}
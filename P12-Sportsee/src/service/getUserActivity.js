import { useState, useEffect } from "react";
import axios from "axios";

export default function GetUserActivity(id) {

    const isApiTrue = localStorage.getItem("isApiTrue");
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            if (isApiTrue === 'true') {
                axios.get(`http://localhost:3000/user/${id}/activity`)
                    .then(function (response) {
                        setData(response.data)
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            } else if (isApiTrue === 'false') {

                axios.get(`/src/mockedData/users/${id}/userActivity.json`)
                    .then(function (response) {
                        setData(response.data)
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            }
        }
        fetchData();
    }, [id, isApiTrue]);

    if (data) {
        return data
    };
}
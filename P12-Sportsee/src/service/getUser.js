import { useState, useEffect } from "react";
import axios from 'axios';

export default function GetUser(id) {

    const isApiTrue = localStorage.getItem("isApiTrue");
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            if (isApiTrue === 'true') {
                axios.get(`http://localhost:3000/user/${id}`)
                    .then(function (response) {
                        setData(response.data)
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            } else if (isApiTrue === 'false') {

                axios.get(`/src/mockedData/users/${id}/userInfos.json`)
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
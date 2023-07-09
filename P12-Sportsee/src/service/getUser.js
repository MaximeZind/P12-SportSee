import { useState, useEffect } from "react";

export default function GetUser(id, isApiTrue) {

    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {

            if (isApiTrue) {
                fetch(`http://localhost:3000/user/${id}`)
                    .then(response => response.json())
                    .then(json => setData(json))
                    .catch(error => console.error(error));
            } else if (!isApiTrue) {
                fetch(`/src/mockedData/users/${id}/userInfos.json`)
                    .then(response => response.json())
                    .then(json => setData(json))
                    .catch(error => console.error(error));
            }
        }
        fetchData()
    }, [id, isApiTrue]);

    return data;
}
import { useState, useEffect } from "react";

export default function getUserAverageSessions(id) {

    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {

            // fetch(`/src/mockedData/users/${id}/userAverageSessions.json`)
            // .then(response => response.json())
            // .then(json => setData(json))
            // .catch(error => console.error(error));

            fetch(`http://localhost:3000/user/${id}/average-sessions`)
                .then(response => response.json())
                .then(json => setData(json))
                .catch(error => console.error(error));
        }
        fetchData()
    }, [id]);

    return data;
}
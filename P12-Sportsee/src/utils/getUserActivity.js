import { useState } from "react";

export default function getUserActivity(id) {

    const [data, setData] = useState(null);

    // fetch(`/src/mockedData/users/${id}/userActivity.json`)
    // .then(response => response.json())
    // .then(json => setData(json))
    // .catch(error => console.error(error));

    fetch(`http://localhost:3000/user/${id}/activity`)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));

    return data;
}
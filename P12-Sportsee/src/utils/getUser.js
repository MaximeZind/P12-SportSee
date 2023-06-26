import { useState } from "react";

export default function getUser(id) {

    const [data, setData] = useState(null);

    fetch(`http://localhost:3000/user/${id}`)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));

    return data;
}
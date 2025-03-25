import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/example/")  // Django API 주소
            .then(response => setData(response.data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h1>Unity 데이터</h1>
            {data ? (
                <p>{JSON.stringify(data)}</p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Home;

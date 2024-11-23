import React, { useEffect, useState } from "react";

function Home() {
    const [test, setTest] = useState(null);

    useEffect(() => {
        fetch("/test")
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                console.log("Fetched data:", data);
                setTest(data);
            })
            .catch(err => console.error("Error fetching data:", err));
    }, []);

    return (
        <div>
            {test === null ? ( 
                <h1>Loading...</h1>
            ) : (
                test.message.map((member, i) => ( 
                    <p key={i}>{member}</p>
                ))
            )}
        </div>
    );
}

export default Home;

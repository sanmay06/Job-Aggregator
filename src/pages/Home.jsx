import React, { useEffect, useState } from 'react';
import api from '../API';

function Home() {
    const [test, setTest] = useState(null);
    const [error, setError] = useState(null);

    /*useEffect(() => {
        api.get('/test')
            .then(response => {
                setTest(response.data);
            })
            .catch(err => {
                console.error('Error fetching data:', err);
                setError(err.message);
            });
    }, []);

    if (error) {
        return <h1>Error: {error}</h1>;
    }
    */
    return (
        <div>
            {test === null ? (
                <h1>Loading...</h1>
            ) : (
                test.message.map((member, index) => <p key={index}>{member}</p>)
            )}
        </div>
    );
}

export default Home;

import React, { useEffect, useState } from 'react';
import './styles.css';
import api from '../API';

function Home() {
    const [test, setTest] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
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


    return (
        <div className="center-container">
            {test === null ? (
                <h1>Loading...</h1>
            ) : (
                <div className="card">
                    <h1>Messages</h1>
                    {test.message.map((member, index) => (
                        <p key={index}>{member}</p>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;

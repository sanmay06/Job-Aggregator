import React, { useEffect, useState } from 'react';
import './styles.css';

function Home() {
    const [test, setTest] = useState(null);
    const [error, setError] = useState(null);

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

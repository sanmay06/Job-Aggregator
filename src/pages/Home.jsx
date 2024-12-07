import React, { useEffect, useState } from 'react';
import './styles.css';
import api from '../API';
import NavBar from '../components/Navbar';

function Home() {
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);
    const [columns, setColumns] = useState([]);
    const [jobs, setjobs] = useState([{}]);

    useEffect(() => {
        api.get('/home')
            .then(response => {
                setjobs(response.data.jobs);
                setStatus(response.data.msg);
            })
            .catch(err => {
                console.error('Error fetching data:', err);
                setError(err.message);
            });
    }, []);

    function update(s) {
        if (columns.includes(s)) {
            setColumns(prev => prev.filter(item => item !== s));
        } else {
            setColumns(prev => [...prev, s]);
        }
        console.log(columns);
    }

    /*if (error) {
        return <h1>Error: {error}</h1>;
    }*/

    return (
        <section>
            <NavBar />
            <div className="center-container">


                <table>
                    <thead>
                        <td>S.No</td>
                        <td>Job Title</td>
                        <td>Link</td>
                        <td>Salary</td>
                    </thead>
                {/*jobs.map((p)=>(
                    <tr>
                        <td>{p.id}</td>
                        <td>{jobs.title}</td>
                        <td>{jobs.link}</td>
                        <td>{jobs.salary}</td>
                    </tr>
                ))*/}
                </table>
            </div>
        </section>
    );
}

export default Home;

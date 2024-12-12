import React, { useState, useEffect } from "react";
import api from "../API";
import { useAuth } from "../Authorize";

function Table(props) {
    const { user } = useAuth();
    const [col, setcol] = useState([]);
    const [title, settitle] = useState(false);
    const [company, setcompany] = useState(false);
    const [salary, setsalary] = useState(true);
    const [location, setlocation] = useState(false);
    const [website, setwebsite] = useState(false);
    const [jobs, setjobs] = useState([{}]);
    const [status, setstatus] = useState(false);

    //console.log(props.profile);

    useEffect(() => {
        if(props.profile){
            api.get(`/profile/${props.profile}?user=${user}`)
            .then((response) => {
                if (response.data.msg === "found") {
                    const profile_data = response.data.profile_data;
                    setcol(profile_data.column);
                }
            })
            .catch((e) => console.log(e));
            api.get(`/home/${props.profile}?user=${user}`)
            .then((response) => {
                setjobs(response.data);
            }).catch(e=>console.log(e));
        }
    }, [props.profile]);

    useEffect(() => {
        if (col) {
            settitle(col.includes("Title"));
            setcompany(col.includes("Company"));
            setsalary(col.includes("Salary"));
            setlocation(col.includes("Location"));
            setwebsite(col.includes("Website"));
        }
        setstatus(true);
    }, [col]);

    // Print function
    const printTable = () => {
        const printWindow = window.open("", "_blank");
        printWindow.document.write(`
            <html>
                <head>
                    <title>Print Table</title>
                    <style>
                        table { width: 100%; border-collapse: collapse; }
                        th, td { padding: 8px; text-align: left; border: 1px solid #ddd; }
                    </style>
                </head>
                <body>
                    <h2>Job Listings</h2>
                    ${document.querySelector("table").outerHTML}
                </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.print();
    };

    return (
        <div className="center-container">
            <h1 hidden={status}>Loading....</h1>
            <form>
                <input
                    type="checkbox"
                    checked={title}
                    onChange={() => settitle(!title)}
                />
                Job Title
                <input
                    type="checkbox"
                    checked={company}
                    onChange={() => setcompany(!company)}
                />
                Company
                <input
                    type="checkbox"
                    checked={salary}
                    onChange={() => setsalary(!salary)}
                />
                Salary
                <input
                    type="checkbox"
                    checked={location}
                    onChange={() => setlocation(!location)}
                />
                Location
                <p hidden={!website}>
                    <input
                        type="checkbox"
                        checked={website}
                        onChange={() => setwebsite(!website)}
                    />
                    Websites
                </p>
            </form>
            <button onClick={printTable}>Print Table</button>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th hidden={!title}>Job Title</th>
                        <th hidden={!company}>Company</th>
                        <th hidden={!location}>Location</th>
                        <th>Link</th>
                        <th hidden={!salary}>Salary</th>
                        <th hidden={!website}>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map((job, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td hidden={!title}>{job.title || "N/A"}</td>
                            <td hidden={!company}>{job.company_name || "N/A"}</td>
                            <td hidden={!location}>{job.location || "N/A"}</td>
                            <td><a href={job.url}>{job.url || "N/A"}</a></td>
                            <td hidden={!salary}>{job.salary || "N/A"}</td>
                            <td hidden={!website}>{job.website || "N/A"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;

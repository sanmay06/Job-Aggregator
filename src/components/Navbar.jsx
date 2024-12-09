import React, { useState, useEffect } from "react";
import "./styles.css";
import { useAuth } from "../Authorize";
import api from "../API";

function NavBar() {
    const { Logout, user } = useAuth();
    const [profiles, setProfiles] = useState([""]);

    useEffect(() => {
        api
            .get(`/profile?user=${user}`)
            .then((response) => {
                setProfiles(response.data);
                console.log("Profiles fetched:", response.data);
            })
            .catch((error) => {
                console.error("Error fetching profiles:", error);
            });
    }, [user]);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <ul className="profiles">
                    {profiles.map((profile, index) => (
                        <li key={index}>
                            <button>{profile}</button>
                            <button></button>
                        </li>
                    ))}
                    <li>
                        <button >+</button>
                    </li>
                </ul>
                <ul className="navbar-links">
                    <li>
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/login" onClick={Logout}>
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;

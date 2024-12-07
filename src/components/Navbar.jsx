import React, { useState } from "react";
import "./styles.css";
import { useAuth } from "../Authorize";
import api from "../API";

function NavBar() {
    const { Logout,user } = useAuth();
    const [profiles, setprofiles] = useState([]);

    useEffect(() => {
      api.get("/profile",{"user":user}).then(response =>setprofiles(response.data.profiles)).catch(e=>console.log(e));
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <ul className="profiles">
                    {profiles.map(p=>(<li><button>{p.name}<button>{/*this to edit*/}</button></button></li>))}
                    <li><button>{/*this to add new one */}</button></li>
                </ul>
                <ul className="navbar-links">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/login" onClick={Logout()}>Logout</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;

import React from "react";
import "./styles.css";

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="navbar-logo">Job Aggregator</h1>
                <ul className="navbar-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;

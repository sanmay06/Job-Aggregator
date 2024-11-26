import React, { useState } from "react";
import { useAuth } from "../Authorize";
import { useNavigate } from "react-router-dom";
import './styles.css';

function Login() {
    const { login, user } = useAuth();
    const navigate = useNavigate();
    const [msg, setMsg] = useState(null);

    async function SignIn(event) {
        event.preventDefault();
    }

    return (
        <div className="center-container">
            <form className="card" onSubmit={SignIn}>
                <h1>Login</h1>
                <label>Username:</label>
                <input type="text" name="username" required />
                <label>Password:</label>
                <input type="password" name="password" required />
                <div hidden>
                    <label>Stay Signed in</label>
                </div>
                <button type="submit">Sign In</button>
                <div className="message">{msg}</div>
                <hr />
                <button
                    type="button"
                    onClick={() => navigate("/Sign In")}
                    style={{
                        backgroundColor: "#ddd",
                        color: "#333",
                        marginTop: "10px",
                    }}
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
}

export default Login;

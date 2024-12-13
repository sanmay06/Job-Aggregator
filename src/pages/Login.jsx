import React, { useState } from "react";
import { useAuth } from "../Authorize";
import { useNavigate } from "react-router-dom";
import './styles.css';
import api from "../API";

function Login() {
    const { login, user } = useAuth();
    const navigate = useNavigate();
    const [msg, setmsg] = useState(null);

    async function SignIn(event) {
        event.preventDefault();
        const username = event.target.username.value;
        const pass = event.target.password.value;
        api.post("/login",{"username": username, "password": pass})
        .then(respone=>{
                setmsg(respone.data.message)
                if(msg === "success"){
                    login(username)
                    navigate('/home', {replace: true});
                }
        }
        ).catch(e=> console.log(e))
    }

    return (
        <div className="login-container">
            <form className="login-card" onSubmit={SignIn}>
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

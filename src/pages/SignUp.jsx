import React, { useEffect, useState } from "react";
import './styles.css';

function SignIn() {
    const [pass, setPass] = useState("");
    const [conPass, setConPass] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");

    async function SignUp(event) {
        event.preventDefault();
        if (pass !== conPass) {
            setError("Passwords do not match");
        } else {
            setError("");
            setMsg("Account created successfully!");
        }
    }

    return (
        <div className="center-container">
            <form className="card" onSubmit={SignUp}>
                <h1>Sign Up</h1>
                <label>Email:</label>
                <input type="email" name="email" required />
                <label>Username:</label>
                <input type="text" name="username" required />
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    required
                />
                <label>Confirm Password:</label>
                <input
                    type="password"
                    name="confirmPassword"
                    value={conPass}
                    onChange={(e) => setConPass(e.target.value)}
                    required
                />
                {error && <p className="error">{error}</p>}
                <button type="submit">Submit</button>
                <div className="message">{msg}</div>
            </form>
        </div>
    );
}

export default SignIn;

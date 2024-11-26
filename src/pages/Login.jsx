import React, { useState } from "react";
import { useAuth } from "../Authorize";
import { useNavigate } from "react-router-dom";
import api from "../API"

function Login() {
    const { login, user} = useAuth();
    const navigate = useNavigate();
    const [msg, setmsg] = useState(null);
    const [ error, setError] = useState();

    /*if(user != null){
        console.log("redirecting");
        navigate("/home");
    }*/

    async function SignIn(event){
        event.preventDefault();
        const username = event.target.username.value;
        const pass = event.target.password.value;
        api.post("/login",{"username": username, "password": pass})
        .then(respone=>
                setmsg(respone.data.message)
        ).catch(e=> console.log(e))
    }

    return (
        <form onSubmit={SignIn}>
            Username:
            <input type="text" name="username" required/><br/>
            Password:
            <input type="password" name="password" required/><br/>
            <input type='checkbox' name="staySigned" />Stay Signed in<br />
            <button type="submit" value={"Sign In"} >Sing In</button><br />
            <div>{msg}</div>
            <hr/> or<br />
            <button onClick={(event) => { event.preventDefault(); navigate("/Sign In")}} >Sign Up</button>
        </form>
    );
}

export default Login;
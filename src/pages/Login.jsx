import React from "react";
import { useAuth } from "../Authorize";
import { useNavigate } from "react-router-dom";

function Login() {
    const { login, user,Logout } = useAuth();
    const navigate = useNavigate();

    if(user != null){
        console.log("redirecting");
        navigate("/home");
    }

    return (
        <form>
            Username:
            <input type="text" name="username" required/><br/>
            Password:
            <input type="password" name="password" required/><br/>
            <button type="submit" value={"Sign In"} /><br />
            <hr/> or
            <button value={"Sign Up"}/>
        </form>
    );
}

export default Login;
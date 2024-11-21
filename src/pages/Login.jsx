import React, { useRef } from "react";
import { useAuth } from "../Authorize";
import { useNavigate } from "react-router-dom";

function Login() {
    const ref = useRef();
    const { login, user} = useAuth();
    const navigate = useNavigate();

    /*if(user != null){
        console.log("redirecting");
        navigate("/home");
    }*/

    function SignUp(event) {
        event.preventDefault();
        navigate("/Sign In");
    }

    function SignIn(event){
        event.preventDefault();
        const formdata = new FormData(ref.current);
        const data = Object.fromEntries(formdata);
        //Add backend to check the login credentials
        if(data.staySigned)
            login(data.username);
            console.log(data.staySigned);
    }

    return (
        <form onSubmit={SignIn} ref={ref}>
            Username:
            <input type="text" name="username" required/><br/>
            Password:
            <input type="password" name="password" required/><br/>
            <input type='checkbox' name="staySigned" />Stay Signed in<br />
            <button type="submit" value={"Sign In"} >Sing In</button><br />
            <hr/> or<br />
            <button onClick={SignUp} >Sign Up</button>
        </form>
    );
}

export default Login;
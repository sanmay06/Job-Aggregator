import React, { useEffect, useRef, useState } from "react";
import api from "../API";

function SignIn() {
    const ref = useRef();
    const form = new FormData(ref.current);
    const data = Object.fromEntries(form);
    const[ pass, setpass ] = useState("");
    const[ conpass, setconpass ] = useState("");
    const [ correct, setcorr ] = useState(false);

    async function SignUp(event) {  
        event.preventDefault();
        await api.post("/register", { 'email':event.target.email.value, 'username': event.target.username.value, 'password': event.target.password.value } )
        
    }

    useEffect( () => {
        if(conpass !== pass)
            setcorr(true);
        else 
            setcorr(false);
    },[conpass])

    return (
        <section >
            <form ref = {ref} onSubmit = {SignUp} >
            Enter Email:<br />
            <input type = 'email' name="email" required/><br />
            Enter the username:<br />
            <input type="text" name="username" required/><br />
            Enter the password:<br />
            <input type="password" name="password" value={pass} onChange={event => setpass(event.target.value)}required/><br />
            Confirm Password:<br />
            <input type="text" name="conpass" value={conpass} onChange={event => setconpass(event.target.value)} required/><br />
            {correct && (<h6>password and confirm password should be same</h6>)}
            <button onSubmit={SignUp}>Submit</button>
        </form>
        </section>
    )
}

export default SignIn;
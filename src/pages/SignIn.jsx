import React, { useEffect, useRef, useState } from "react";

function SignIn() {
    const ref = useRef();
    const[ pass, setpass ] = useState("");
    const[ conpass, setconpass ] = useState("");
    const formdata = new FormData(ref.current);
    const data = Object.fromEntries(formdata);
    const [ correct, setcorr ] = useState(false);

    function SignUp() {

    }

    useEffect( () => {
        if(conpass !== pass)
            setcorr(true);
        else 
            setcorr(false);
    },[conpass])

    return (
        <section >
            <form ref={ref} onSubmit={SignUp} >
            Enter Email:<br />
            <input type = 'email' name="email" required/><br />
            Enter the username:<br />
            <input type="text" name="username" required/><br />
            Enter the password:<br />
            <input type="password" name="password" value={pass} onChange={event => setpass(event.target.value)}required/><br />
            Confirm Password:<br />
            <input type="text" name="conpass" value={conpass} onChange={event => setconpass(event.target.value)} required/><br />
            {correct && (<h6>password and confirm password should be same</h6>)}
            <button >Submit</button>
        </form>
        </section>
    )
}

export default SignIn;
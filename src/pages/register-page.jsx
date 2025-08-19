import React from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useState } from "react";
import './register-page.css';

function Register(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = () => {
        fetch("http://localhost:5000/register", {  // <-- your backend URL
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) alert(data.message);
            else alert("Registration failed");
        })
        .catch(err => console.error(err));
    };

    return(
        <>  
        <div className="wrapper">
            <div className="wrap">
                <form action="" className="register">
                    <h2>Register</h2>
                    <div className="input-box">
                        <FaUser className="icon"/>
                        <input type="text" id="username" placeholder="Username" value={username}  minLength={4} onChange={e => setUsername(e.target.value)} required />
                    </div>
                    <div className="input-box">
                        <FaUser className="icon"/>
                        <input type="email" id="email" placeholder="Email" minLength={4} value={email} onChange={e => setEmail(e.target.value)} required />
                    </div>
                    <div className="input-box">
                        <FaLock className="icon"/>
                        <input type="password" id="password" placeholder="Password" value={password} minLength={8} onChange={e => setPassword(e.target.value)} required />
                    </div>
                    <button className="register-button" onClick={handleRegister} >Register</button>
                    <div className="login">
                        <p>Already have an account? <a href="/login">Login</a>.</p>
                    </div>
                </form>
            </div>
        </div>

        </>

    );
}

export default Register;
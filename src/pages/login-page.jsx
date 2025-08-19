import React from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import './login-page.css';

function Login(){
    return(
        <>  
        <div className="wrapper">
            <div className="wrap">
                <form action="" className="login">
                    <h2>Login</h2>
                    <div className="input-box">
                        <FaUser className="icon"/>
                        <input type="text" id="username" placeholder="Username" required />
                        
                    </div>
                    <div className="input-box">
                        <FaLock className="icon"/>
                        <input type="password" id="password" placeholder="Password" required />
                        
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember Me</label>
                        <a href="#">Forgot Password</a>
                    </div>
                    <button className="login-button" type="submit">Login</button>

                    <div className="register">
                        <p>Don't have an account? <a href="/register">Register</a>.</p>
                    </div>
                </form>
            </div>
        </div>

        </>

    );
}

export default Login;
import React from "react";
import './login.css'
const Login = (props) => {
    const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError } = props;
    
    return(
        <section className="login">
            <div className="loginContainer">
                <label>Email</label>
                <br />
                <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} />
                <p className="errorMsg">{emailError}</p>
                <br />
                <label>Password</label>
                <br />
                <input 
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <br />
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <div className="d-flex justify-content-center">
                        <button className="btn btn-primary loginBtn" onClick={() => { handleLogin(); }} >Login</button>
                        </div>
                        <br />
                        <br />
                        <p>Dont't have and account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                        </>
                    ) : (
                        <>
                        <div className="d-flex justify-content-center">
                        <button className="btn btn-primary loginBtn" onClick={handleSignup} >Sign up</button>
                        </div>
                        <br />
                        <br />
                        <p>Have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Login</span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Login;
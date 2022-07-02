// import { render } from "@testing-library/react";
import React, {useState} from 'react';
import { render } from 'react-dom';
import '../css/Login.css'
import Product from './Product.js';
import Register from './Register.js';


function Login(props){
    let [username, setUserName]=useState();
    let [password, setPassword]=useState();

    function routeToProductPage(){
        alert("THIS IS WHERE PRODUCT PAGE WOULD DISPLAY... IF I HAD ONEEE")
        render(
            <Product/>
        )
    }
    function routeToRegisterPage(){
        alert("THIS IS WHERE REGISTER PAGE WOULD DISPLAY... IF I HAD ONEEE")
    }

    return(
        <div>     
            <header className="header">
                <h1>Login Page</h1>
            </header>   
            <form>
                <fieldset className="loginForm">
                    <legend>Login</legend>
                    <label>Username:</label>
                    <input type="text" onChange={i=>setUserName(i.target.value)}/>
                    <label>Password:</label>
                    <input type="password" onChange={i=>setPassword(i.target.value)}/>
                    <div id="buttons">
                        <button type="submit" onClick={routeToProductPage}>Login</button>
                        <button type="submit" onClick={routeToRegisterPage}>Register</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}
export default Login;
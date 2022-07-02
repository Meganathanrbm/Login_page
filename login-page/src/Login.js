import React from 'react';
import { useState, Redirect } from 'react';
import './Login.css';
import { BrowserRouter as Switch, Router, Route, useNavigate } from 'react-router-dom';
import logofb from './logofb.svg';

//import { Link } from 'react-router-dom';
//import { Navigate } from 'react-router-dom';
import Axios from "axios"



function Login() {
   
    const navigate = useNavigate();
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(' ');

   
   
    const login = (event) => {
        event.preventDefault();

         //axios function

        Axios.get("http://localhost:3006/users").then((Response)=>{
            const jsonData=Response.data;
            if(email in jsonData)
            {
           if(jsonData[email]['password']===password)
           {
            console.log(jsonData[email]);
           }
           else {
            alert("Incorrect Pasword...");
        }
            }
            else {
                alert("Invalid Email");
            }
        })
    }
    return (
        <div className='login'>
    
            <div className='container'>
                <div className='left_container'>
                    <div className='logo'>
                        <img alt='facebook' src={logofb}></img>
                    </div>
                    <div className='logo_para'>
                        <p className='para_line'>Facebook helps you connect and share with the people in your life</p>
                    </div>
                </div>
                <div className='right_container'>
                    <div className='content'>
                        <form>
                            <input type="email" placeholder='Email Address' onChange={(e) => setEmail(e.target.value) }  name='username' /><br />
                            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} name='password' /><br />
                            <button type='submit' className='btn_login' value="Log in" onClick={login} name="login">Log in</button>
                            <p>Forget password?</p>
                            <hr />
                            <button className='btn-newAccount' value='Create New Account'>Create New Account</button>
                        </form>
                    </div>
                    <div className='down_para'>
                        <p><b>Create a Page </b> for a celebrity, brand or business.</p>
                    </div>
                </div>
            </div>
            
           
        </div>
        
    )
}


export default Login;
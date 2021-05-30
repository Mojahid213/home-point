import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {login} from '../../features/userSlice'
import './Login.css'

const Login = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const dispatch  = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            login({
            name: name,
            email: email,
            password: password,
            loggedIn: true
        }))
    }
   
    return (
        <div className="Login-Main-Div">
            <form  className="Login_Form" onSubmit={(e) => handleSubmit(e)}>
                <h5 className="text-center text-light">Sign In</h5>
                <div className="form-group">
                    {/* <label htmlFor="email">Email</label> */}
                    <input className="form-control my-2" type="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="name"/>
                </div>
                <div className="form-group">
                    {/* <label htmlFor="password">password</label> */}
                    <input className="form-control my-2" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email"/>
                </div>
                <div className="form-group">
                    {/* <label htmlFor="password">password</label> */}
                    <input className="form-control my-2" type="password" valu={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password"/>
                </div>
                <div className="input-field">
                    <button className="btn btn-dark" type="submit">LogIn</button>
                </div>

            </form>
           
            
        </div>
    );
};

export default Login;
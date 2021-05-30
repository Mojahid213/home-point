import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {login} from '../../features/userSlice'

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
        <div className="container login">
            <form  className="white login-form" onSubmit={(e) => handleSubmit(e)}>
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    {/* <label htmlFor="email">Email</label> */}
                    <input type="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="name"/>
                </div>
                <div className="input-field">
                    {/* <label htmlFor="password">password</label> */}
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email"/>
                </div>
                <div className="input-field">
                    {/* <label htmlFor="password">password</label> */}
                    <input type="password" valu={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password"/>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0" type="submit">LogIn</button>
                </div>

            </form>
           
            
        </div>
    );
};

export default Login;
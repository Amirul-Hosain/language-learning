import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className='login-field'>
            <h2>Login</h2>
            <div className='input-field'>
                <input type="text" name="" id="" placeholder='Name' />
                <input type="email" name="" id="" placeholder='Email' />
                <input type="password" name="" id="" placeholder='Password' />
            </div>
            <div>
                <button className='submit-button'>Submit</button>
            </div>
        </div>
    );
};

export default Login;
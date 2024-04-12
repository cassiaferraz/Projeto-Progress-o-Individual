import { React, useState, useEffect } from 'react';

import './login.css'
// import Logo from '../../../../public/img/Vivo Horizontal Purpura RGB.jpg'
import LoginForm from '../../userSessions/LoginForm/LoginForm';
function Login() {

    return (
        <div className='body-container'>
            {/* <img src={Logo} className="vivo-icon" alt="vivo icon" /> */}

            <LoginForm/>
        </div>
    );
}

export default Login;

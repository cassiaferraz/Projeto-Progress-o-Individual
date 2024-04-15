import React, { useState } from 'react';

import "./register_style.css"

import Logo from "../../../img/logovivo.svg"
import BackArrow from "/img/svgs/setaberta.svg"

import RegisterForm from '../../userSessions/RegisterForm/RegisterForm';

function Register() {

    return (

        <div className='body-container'>

            <img src={Logo} className="vivo-icon" alt="vivo icon" />

            <div className="register-container">
               
                <a href="/">
                    <img 
                        className="btn-backPage"
                        src={BackArrow} 
                        alt="Voltar"
                        />
                </a>

                <h3>Cadastro</h3>

                <RegisterForm/>

            </div>
        </div>
    );
}

export default Register;

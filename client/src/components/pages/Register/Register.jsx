import React, { useState } from 'react';

import "./register_style.css"

import Logo from '../../../../public/img/svgs/logoprogressao.png'
import BackArrow from "/img/svgs/voltar.svg"

import RegisterForm from '../../userSessions/RegisterForm/RegisterForm';

function Register() {

    return (

        <div className='body-container'>

            <div className="register-container">
              
                <a href="/">
                    <img 
                        className="btn-backPage"
                        src={BackArrow} 
                        alt="Voltar"
                        />
                </a>
                <div className='subtitulo-cadastro'>

                  Altere sua senha para acessar o app
                </div>
                <RegisterForm/>

                 {/* <h3>Primeiro Acesso</h3> */}

            </div>
        </div>
    );
}

export default Register;

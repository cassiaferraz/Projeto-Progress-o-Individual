import React, { useState } from 'react';

import "./register_style.css"

import BackArrow from "/img/svgs/voltar.svg"

import ResetPasswordForm from '../../userSessions/UpdateForm/UpdateForm';

function Update() {

    return (

        <div className='body-container'>

            <div className="register-container">
              
                <a href="/perfil">
                    <img 
                        className="btn-backPage"
                        src={BackArrow} 
                        alt="Voltar"
                        />
                </a>
                <div className='subtitulo-cadastro'>

                </div>
                <ResetPasswordForm/>

            </div>
        </div>
    );
}

export default Update;

// import React, { useState, useEffect } from 'react';
// import BoxPerfil from "../BoxPerfil/BoxPerfil";
// import Navmenu from '../../Navbar/Navmenu';
// import AvatarSelector from './AvatarSelector';
// import './Avatar.css';
// import Swal from 'sweetalert2';
// import BackArrow from "/img/svgs/voltar.svg";
// import LogoutButton from "../../userSessions/Logout/LogoutButton";

// export default function Avatar({ serverIP }) {
//     const token = sessionStorage.getItem("token");
//     const userId = sessionStorage.getItem('userId');

//     if (!token) {
//         window.location.href = "/";
//     }

//     const [avatar, setAvatar] = useState(null);
//     const [selectedAvatar, setSelectedAvatar] = useState(null);

//     useEffect(() => {
//         if (token) {
//             fetch(`${serverIP}/avatar/get-avatar?userId=${userId}`, {
//                 headers: {
//                     'x-access-token': token
//                 }
//             })
//                 .then(response => {
//                     if (!response.ok) {
//                         throw new Error('Erro ao buscar o avatar');
//                     }
//                     return response.json();
//                 })
//                 .then(data => setAvatar(data.avatarPath))
//                 .catch(error => console.error('Erro ao buscar o avatar:', error));
//         } else {
//             console.error('User ID não encontrado no sessionStorage');
//         }
//     }, [serverIP, token, userId]);

//     const handleAvatarSelect = (avatar) => {
//         setSelectedAvatar(avatar);
//     };

//     const handleSaveAvatar = async () => {
//         if (selectedAvatar && userId && token) {
//             try {
//                 const response = await fetch(`${serverIP}/avatar/set-avatar`, {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'x-access-token': token
//                     },
//                     body: JSON.stringify({ userId, avatarPath: selectedAvatar })
//                 });

//                 if (response.ok) {
//                     setAvatar(selectedAvatar); // Atualiza o estado com o novo avatar
//                     localStorage.setItem('avatar', selectedAvatar);
//                     Swal.fire({
//                         icon: 'success',
//                         title: 'Alterado!',
//                         text: 'Avatar atualizado com sucesso!',
//                     });
//                 } else {
//                     Swal.fire({
//                         icon: 'error',
//                         title: 'Erro!',
//                         text: `Erro ao atualizar o avatar: ${response.statusText}`,
//                     });
//                 }
//             } catch (error) {
//                 Swal.fire({
//                     icon: 'error',
//                     title: 'Erro!',
//                     text: `Erro ao atualizar o avatar: ${error.message}`,
//                 });
//             }
//         } else {
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Erro!',
//                 text: 'User ID ou token não encontrado. Por favor, faça login novamente.',
//             });
//         }
//     };

//     return (
//         <div className="todocontainer">
//             <BoxPerfil serverIP={serverIP} avatar={avatar} />
//             <Navmenu />
//             <div className='header-avatar'>
//                 <div id="sair-app">
//                     <a href="/perfil">
//                         <img
//                             className="btn-backPage"
//                             src={BackArrow}
//                             alt="Voltar"
//                         />
//                     </a>
//                     <h2 id="titulopagina">Selecione seu Avatar</h2>
//                     <LogoutButton></LogoutButton>
//                 </div>

//                 <div className='avatares-options'>
//                     <AvatarSelector onSelect={handleAvatarSelect} />
//                     {selectedAvatar && <p>Avatar Selecionado: {selectedAvatar.split('/').pop().replace('.png', '')}</p>}
//                 </div>
//                 <button className='alterar-avatar' onClick={handleSaveAvatar}>
//                     Alterar Avatar
//                 </button>
//             </div>
//         </div>
//     );
// }
 
 







import React, { useState, useEffect } from 'react';
import BoxPerfil from "../BoxPerfil/BoxPerfil";
import Navmenu from '../../Navbar/Navmenu';
import AvatarSelector from './AvatarSelector';
import './Avatar.css';
import Swal from 'sweetalert2';
import BackArrow from "/img/svgs/voltar.svg";
import LogoutButton from "../../userSessions/Logout/LogoutButton"

export default function Avatar({ serverIP }) {
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem('userId');

    if (!token) {
        window.location.href = "/";
    }

    const [avatar, setAvatar] = useState(null);
    const [selectedAvatar, setSelectedAvatar] = useState(null);

    useEffect(() => {


        if (token) {
            //console.log('Fetching avatar');
            fetch(`${serverIP}/avatar/get-avatar?userId=${userId}`, {
                headers: {
                    'x-access-token': token
                }
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro ao buscar o avatar');
                    }
                    return response.json();
                })
                .then(data => setAvatar(data.avatarPath))
                .catch(error => console.error('Erro ao buscar o avatar:', error));
        } else {
            console.error('user id não encontrado no sessionStorage');
        }
    }, [serverIP, token]);

    
    const handleAvatarSelect = (avatar) => {
        setSelectedAvatar(avatar);
    };

    const handleSaveAvatar = async () => {
        if (selectedAvatar && userId && token) {
            try {
                const response = await fetch(`${serverIP}/avatar/set-avatar`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-access-token': token
                    },
                    body: JSON.stringify({ userId, avatarPath: selectedAvatar })
                });

                if (response.ok) {
                    //console.log('avatar caminho enviado ao server', selectedAvatar);
                    setAvatar(selectedAvatar);
                    localStorage.setItem('avatar', selectedAvatar);
                    //console.log('avatar salvo no localstorage', selectedAvatar)
                    Swal.fire({
                        icon: 'success',
                        title: 'Alterado!',
                        text: 'Avatar atualizado com sucesso!',
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro!',
                        text: `Erro ao atualizar o avatar: ${response.statusText}`,
                    });
                }
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Erro!',
                    text: `Erro ao atualizar o avatar: ${error.message}`,
                });
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Erro!',
                text: 'User ID ou token não encontrado. Por favor, faça login novamente.',
            });
        }
    };

    return (
        <div className="todocontainer">
            <BoxPerfil serverIP={serverIP} avatar={avatar} />
            <Navmenu />
            <div className='header-avatar'>
            <div id="sair-app">
                <a href="/perfil">
                    <img
                        className="btn-backPage"
                        src={BackArrow}
                        alt="Voltar"
                    />
                </a>
                    <h2 id="titulopagina">Selecione seu Avatar</h2>
                    <LogoutButton></LogoutButton>
                </div>

                <div className='avatares-options'>
                    <AvatarSelector onSelect={handleAvatarSelect} />
                    {selectedAvatar && <p>Avatar Selecionado: {selectedAvatar.split('/').pop().replace('.png', '')}</p>}
                </div>
                <button className='alterar-avatar' onClick={handleSaveAvatar}>
                    Alterar Avatar
                </button>
            </div>
        </div>
    );
}
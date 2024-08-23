import React, { useState, useEffect } from 'react';
import BoxPerfil from "../BoxPerfil/BoxPerfil";
import Navmenu from '../../Navbar/Navmenu';
import AvatarSelector from './AvatarSelector';

export default function Avatar({ serverIP }) {
    const [avatar, setAvatar] = useState(null);
    const userId = sessionStorage.getItem('userId'); // Assumindo que o ID do usuário está armazenado no sessionStorage

    useEffect(() => {
        if (userId) {
            fetch(`${serverIP}/api/get-avatar?userId=${userId}`)
                .then(response => response.json())
                .then(data => setAvatar(data.avatarPath))
                .catch(error => console.error('Erro ao buscar o avatar:', error));
        } else {
            console.error('User ID não encontrado no sessionStorage');
        }
    }, [serverIP, userId]);

    const handleAvatarSelect = (selectedAvatar) => {
        setAvatar(selectedAvatar);

        fetch(`${serverIP}/api/set-avatar`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId, nameAvatar: 'Nome do Avatar', avatar: selectedAvatar })
        }).catch(error => console.error('Erro ao atualizar o avatar:', error));
    };

    return (
        <div className="todocontainer">
            <BoxPerfil serverIP={serverIP} avatar={avatar} />
            <Navmenu/>
            <div>
                <h1>Selecione seu Avatar</h1>
                <AvatarSelector onSelect={handleAvatarSelect} />
                {avatar && <p>Avatar selecionado: {avatar}</p>}
            </div>
        </div>
    );
}
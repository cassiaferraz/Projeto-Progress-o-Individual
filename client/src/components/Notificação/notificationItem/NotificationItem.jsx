import fetchReadNotification from "../../../services/notifications/fetchReadNotification"
import { FaTrash } from "react-icons/fa6";
import fetchDeleteNotification from "../../../services/notifications/fetchDeleteNotification";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NotificationItem({ notification, handleExclusion, serverIP }) {
    const navigate = useNavigate();
    const [isRead, setIsRead] = useState(notification?.STATUS_LEITURA);

    //console.log('Server IP em NotificationItem:', serverIP)

    const handleOnClick = async () => {
        if (!notification?.STATUS_LEITURA) {
            const token = sessionStorage.getItem('token');
            const response = await fetchReadNotification(token, notification?.ID_NOTIFICACAO);
            if (!response.ok) {
                alert("Erro ao ler notificação");
            } else {
                setIsRead(true);
            }
        }
        if (notification.REFERENCIA?.path) {
            navigate('/' + notification.REFERENCIA.path);
        }
    };

    const handleExcludeNotification = async () => {
        const token = sessionStorage.getItem('token');
        const response = await fetchDeleteNotification({
            token, 
            notificationId: notification?.ID_NOTIFICACAO, 
            serverIP
        });  // Agora passando os parâmetros corretamente
        console.log("Resposta da exclusão:", response)
        if (!response?.ok) {
            alert('Erro ao excluir notificação');
        } else {
            handleExclusion(notification?.ID_NOTIFICACAO);  // Remove da lista
        }
    };

    return (
        <div className="notification_item" >
            <div className="text" onClick={handleOnClick} style={isRead ? { color: 'var(--vivo-lightpurple50)' } : { color: 'var(--vivo-green)', fontWeight: '600' }}>
                {notification?.TEXTO}
            </div>
            <div className="actions">
                <FaTrash className="trash" onClick={handleExcludeNotification} />
            </div>
        </div>
    );
}
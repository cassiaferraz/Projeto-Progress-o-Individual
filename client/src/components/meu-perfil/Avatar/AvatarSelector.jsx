import React, { useState } from 'react';
import avatar1 from '../../../assets/avatar/avatar1.png'
import avatar2 from '../../../assets/avatar/avatar2.png'
import avatar3 from '../../../assets/avatar/avatar3.png'
import avatar4 from '../../../assets/avatar/avatar4.png'
import avatar5 from '../../../assets/avatar/avatar5.png'
import avatar6 from '../../../assets/avatar/avatar6.png'

const avatars = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6
];

function AvatarSelector({ onSelect }) {
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleSelect = (avatar) => {
    setSelectedAvatar(avatar);
    onSelect(avatar);
  };

  return (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      {avatars.map((avatar, index) => (
        <img
          key={index}
          src={avatar}
          alt={`Avatar ${index + 1}`}
          onClick={() => handleSelect(avatar)}
          style={{
            cursor: 'pointer',
            border: selectedAvatar === avatar ? '4px solid rgb(102, 0, 153)' : 'none',
            borderRadius: '50%',
            width: '100px',
            height: '100px',
          }}
        />
      ))}
    </div>
  );
}

export default AvatarSelector;
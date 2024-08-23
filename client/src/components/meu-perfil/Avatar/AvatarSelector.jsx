import React, { useState } from 'react';
import avatar1 from '../../../assets/avatar/avatar1.png'
import avatar2 from '../../../assets/avatar/avatar2.png'
import avatar3 from '../../../assets/avatar/avatar3.png'
import avatar4 from '../../../assets/avatar/avatar4.png'
import avatar5 from '../../../assets/avatar/avatar5.png'
import avatar6 from '../../../assets/avatar/avatar6.png'

const avatars = [
  'avatar1.png',
  'avatar2.png',
  'avatar3.png',
  'avatar4.png',
  'avatar5.png',
  'avatar6.png'
];

function AvatarSelector({ onSelect }) {
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleSelect = (avatar) => {
    setSelectedAvatar(avatar);
    onSelect(avatar);
  };

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {avatars.map((avatar, index) => (
        <img
          key={index}
          src={`/assets/avatar/${avatar}`}
          alt={`Avatar ${index + 1}`}
          onClick={() => handleSelect(avatar)}
          style={{
            cursor: 'pointer',
            border: selectedAvatar === avatar ? '2px solid blue' : 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px'
          }}
        />
      ))}
    </div>
  );
}

export default AvatarSelector;
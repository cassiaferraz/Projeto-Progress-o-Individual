// import React, { useState } from 'react';


// const avatarUrls = [
//   '/avatar/Avatar1.png',
//   '/avatar/Avatar2.png',
//   '/avatar/Avatar3.png',
//   '/avatar/Avatar4.svg',
//   '/avatar/Avatar5.png',
//   '/avatar/Avatar6.png',
//   '/avatar/Avatar7.svg',
//   '/avatar/Avatar8.svg',
//   '/avatar/Avatar9.svg',
//   '/avatar/Avatar10.svg',
//   '/avatar/Avatar11.svg',
//   '/avatar/Avatar12.png'
// ];

// function AvatarSelector({ onSelect }) {
//   const [selectedAvatar, setSelectedAvatar] = useState(null);

//   const handleSelect = (avatar) => {
//     setSelectedAvatar(avatar);
//     onSelect(avatar);
//   };

//   return (
//     <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
//       {avatarUrls.map((avatarUrl, index) => (
//         <img
//           key={index}
//           src={avatarUrl}
//           alt={`Avatar ${index + 1}`}
//           onClick={() => handleSelect(avatarUrl)}
//           style={{
//             cursor: 'pointer',
//             border: selectedAvatar === avatarUrl ? '4px solid rgb(102, 0, 153)' : 'none',
//             borderRadius: '50%',
//             width: '100px',
//             height: '100px',
//           }}
//         />
//       ))}
//     </div>
//   );
// }

// export default AvatarSelector;

 










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
  avatar6,
  avatar7,
  avatar8,
  avatar9,
  avatar10,
  avatar11,
  avatar12
];

function AvatarSelector({ onSelect }) {
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleSelect = (avatar) => {
    setSelectedAvatar(avatar);
    onSelect(avatar);
  };

  return (
    <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
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
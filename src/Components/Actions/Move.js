import React from 'react';

const Move = () => {
  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + './drag.png'}
        style={{ width: '18px', height: '18px' }}
        alt="move"
      />
    </div>
  );
};

export default Move;

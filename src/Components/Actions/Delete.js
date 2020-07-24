import React from 'react';

const Delete = () => {
  return (
    <div className="unit_action">
      <img
        src={process.env.PUBLIC_URL + './delete.png'}
        style={{ width: '18px', height: '18px' }}
        alt="move"
      />
    </div>
  );
};

export default Delete;

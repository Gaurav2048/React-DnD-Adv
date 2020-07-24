import React from 'react';

const Indent = () => {
  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + './front.png'}
        style={{ width: '18px', height: '18px' }}
        alt="move"
      />
    </div>
  );
};

export default Indent;

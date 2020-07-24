import React from 'react';
import Move from './Move';
import Indent from './Indent';
import Outdent from './Outdent';
import Delete from './Delete';

const Action = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '20%',
        justifyContent: 'space-evenly',
      }}
    >
      <Move />
      <Outdent />
      <Indent />
      <Delete />
    </div>
  );
};

export default Action;

import React from 'react';
import Move from './Move';
import Indent from './Indent';
import Outdent from './Outdent';
import Delete from './Delete';

const Action = ({ data, setData, chapterIndex, topicIndex }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '20%',
        gap: '10px',
      }}
    >
      <Move />
      <Outdent />
      <Indent
        data={data}
        setData={setData}
        chapterIndex={chapterIndex}
        topicIndex={topicIndex}
      />
      <Delete
        data={data}
        setData={setData}
        chapterIndex={chapterIndex}
        topicIndex={topicIndex}
      />
    </div>
  );
};

export default Action;

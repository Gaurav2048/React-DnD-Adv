import React from 'react';
import Topic from './Topic';

const Chapter = ({ chapterTitle, ...props }) => {
  return (
    <div>
      <div
        className="draggable"
        draggable="true"
        style={{
          borderBottom: '.5px solid #EEEEEE',
        }}
      >
        <h2> {chapterTitle} </h2>
      </div>
      {props.children}
    </div>
  );
};

Chapter.Topic = Topic;

export default Chapter;

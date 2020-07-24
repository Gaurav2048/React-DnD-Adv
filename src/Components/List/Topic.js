import React from 'react';
import Action from '../Actions/Action';

const Topic = ({
  chapterIndex,
  topicIndex,
  onDragStart,
  name,
  onDragEnd,
  onDragEnter,
}) => {
  console.log(chapterIndex, topicIndex);
  return (
    <div
      className="draggable topic"
      draggable="true"
      style={{
        borderBottom: '1px solid #EEEEEE',
      }}
      onDragStart={(e) => {
        onDragStart(e, { chapterIndex, topicIndex });
      }}
      onDragEnter={(e) => {
        onDragEnter(e, { chapterIndex, topicIndex });
      }}
      onDragEnd={onDragEnd}
    >
      <Action />
      <h3> {name} </h3>
    </div>
  );
};

export default Topic;

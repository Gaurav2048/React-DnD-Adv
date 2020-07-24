import React from 'react';
import Topic from './Topic';
import AddTopic from '../AddTopic';
import Action from '../Actions/Action';

const Chapter = ({
  chapterTitle,
  chapterIndex,
  onDragStart,
  onDragEnd,
  onDragEnter,
  ...props
}) => {
  return (
    <div>
      <div
        className="draggable"
        draggable="true"
        style={{
          borderBottom: '.5px solid #EEEEEE',
        }}
        onDragStart={(e) => onDragStart(e, chapterIndex)}
        onDragEnd={onDragEnd}
        onDragEnter={(e) => {
          onDragEnter(e, chapterIndex);
        }}
      >
        <Action />
        <h2> {chapterTitle} </h2>
      </div>
      {props.children}
    </div>
  );
};

Chapter.AddTopic = AddTopic;
Chapter.Topic = Topic;

export default Chapter;

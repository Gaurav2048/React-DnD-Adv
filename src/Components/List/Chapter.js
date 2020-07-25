import React from 'react';
import Topic from './Topic';
import AddTopic from '../AddTopic';
import Action from '../Actions/Action';

const Chapter = ({
  chapterTitle,
  chapterIndex,
  onDragStart,
  data,
  setData,
  onDragEnd,
  onDragEnter,
  changeSubjectName,
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
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={(e) => {
          onDragEnter(e, chapterIndex);
        }}
      >
        <Action data={data} setData={setData} chapterIndex={chapterIndex} />
        <input
          className="chapter_name"
          value={chapterTitle || ''}
          placeholder="Enter Chapter Name"
          onChange={(e) => {
            changeSubjectName(e.target.value, chapterIndex);
          }}
        />
      </div>
      {props.children}
    </div>
  );
};

Chapter.AddTopic = AddTopic;
Chapter.Topic = Topic;

export default Chapter;

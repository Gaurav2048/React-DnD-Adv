import React from 'react';
import Action from '../Actions/Action';

const Topic = ({
  chapterIndex,
  topicIndex,
  onDragStart,
  data,
  setData,
  name,
  onDragEnd,
  onDragEnter,
  onTopicChange,
}) => {
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
      onDragOver={(e) => e.preventDefault()}
      onDragEnd={onDragEnd}
    >
      <Action
        data={data}
        setData={setData}
        chapterIndex={chapterIndex}
        topicIndex={topicIndex}
      />
      <input
        value={name || ''}
        className="topic_name"
        placeholder="Topic name"
        onChange={(e) => {
          onTopicChange(e.target.value, chapterIndex, topicIndex);
        }}
      />
    </div>
  );
};

export default Topic;

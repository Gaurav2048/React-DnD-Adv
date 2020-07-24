import React, { useEffect } from 'react';
import { KEY_ENTER } from '../Constants';

const AddTopic = ({ chapterIndex, onTopicEntered }) => {
  useEffect(() => {
    window.addEventListener('keydown', onKeyPressed, true);
    return () => window.removeEventListener('keydown', onKeyPressed, true);
  }, []);

  const onKeyPressed = (e) => {
    if (e.keyCode === KEY_ENTER) {
      const topicInput = document.getElementById(chapterIndex);
      onTopicEntered(chapterIndex, topicInput.value, () => {
        topicInput.value = '';
      });
    }
  };

  return (
    <div
      className="draggable topic"
      style={{ marginLeft: '22%', paddingTop: '6px', paddingBottom: '6px' }}
    >
      <input
        className="add_a_topic"
        type="text"
        id={chapterIndex}
        placeholder="Add a topic"
      />
    </div>
  );
};

export default AddTopic;

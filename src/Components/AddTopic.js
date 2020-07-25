import React, { useEffect, useRef } from 'react';
import { KEY_ENTER } from '../Constants';

const AddTopic = ({ chapterIndex, onTopicEntered }) => {
  const isListeningToKeyDown = useRef();
  useEffect(() => {
    if (isListeningToKeyDown.current !== null) {
      console.log('renrender');
      isListeningToKeyDown.current = true;
    }
  }, []);

  const onKeyPressed = (e) => {
    if (e.keyCode === KEY_ENTER) {
      const topicInput = document.getElementById(chapterIndex);
      if (topicInput.value === '') {
        return;
      }
      onTopicEntered(chapterIndex, topicInput.value, () => {
        topicInput.value = '';
      });
    }
  };

  const onFocus = (e) => {
    window.addEventListener('keydown', onKeyPressed);
  };

  const onBlur = (e) => {
    window.removeEventListener('keydown', onKeyPressed);
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
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder="Add a topic"
      />
    </div>
  );
};

export default AddTopic;

import React from 'react';

const Delete = ({ chapterIndex, topicIndex, data, setData }) => {
  const deleteChapterOrTopic = (e) => {
    let copyData = JSON.parse(JSON.stringify(data));
    console.log(copyData);
    if (topicIndex === undefined) {
      // delete chapter
      copyData[0].content.splice(chapterIndex, 1);
    } else {
      //delete topic
      copyData[0].content[chapterIndex].topics.splice(topicIndex, 1);
    }
    setData(copyData);
  };
  return (
    <div className="unit_action">
      <img
        src={process.env.PUBLIC_URL + './delete.png'}
        style={{ width: '18px', height: '18px' }}
        alt="move"
        onClick={deleteChapterOrTopic}
      />
    </div>
  );
};

export default Delete;

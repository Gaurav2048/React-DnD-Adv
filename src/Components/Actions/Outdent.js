import React from 'react';

const Outdent = ({ data, setData, chapterIndex, topicIndex }) => {
  const Outdent = (e) => {
    if (topicIndex === undefined) return;
    const copyData = [...data];
    const chapter = copyData[0].content[chapterIndex];
    const { name, id } = chapter.topics[topicIndex];
    const newChapterTopics = chapter.topics.splice(
      topicIndex + 1,
      chapter.topics.length - 1
    );
    chapter.topics.splice(topicIndex, 1);
    const newChapter = {
      id,
      chapterTitle: name,
      topics: newChapterTopics,
    };

    copyData[0].content[chapterIndex] = chapter;
    copyData[0].content.splice(chapterIndex + 1, 0, newChapter);
    setData(copyData);
  };

  return (
    <div className="unit_action">
      <img
        src={process.env.PUBLIC_URL + './back.png'}
        style={{ width: '18px', height: '18px' }}
        alt="move"
        onClick={Outdent}
      />
    </div>
  );
};

export default Outdent;

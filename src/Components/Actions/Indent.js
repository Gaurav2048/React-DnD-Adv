import React from 'react';

const Indent = ({ data, setData, chapterIndex, topicIndex }) => {
  const indent = (e) => {
    console.log(topicIndex);
    if (topicIndex !== undefined) return;
    if (chapterIndex !== 0) {
      let copyData = [...data];
      const chapterToMerge = copyData[0].content[chapterIndex];

      const chapterWithMarge = copyData[0].content[chapterIndex - 1];
      chapterWithMarge.topics.push({
        id: Math.floor(Math.random() * 10000),
        name: chapterToMerge.chapterTitle,
      });

      chapterWithMarge.topics = [
        ...chapterWithMarge.topics,
        ...chapterToMerge.topics,
      ];
      copyData[0].content[chapterIndex - 1] = chapterWithMarge;
      copyData[0].content.splice(chapterIndex, 1);
      setData(copyData);
    }
  };

  return (
    <div className="unit_action">
      <img
        src={process.env.PUBLIC_URL + './front.png'}
        style={{ width: '18px', height: '18px' }}
        alt="move"
        onClick={indent}
      />
    </div>
  );
};

export default Indent;

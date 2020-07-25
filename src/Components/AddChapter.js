import React from 'react';

const AddChapter = ({ data, setData }) => {
  const addChapter = (e) => {
    const copyData = JSON.parse(JSON.stringify(data));
    const newTopic = {
      id: new Date().getTime(),
      chapterTitle: '',
      topics: [],
    };
    copyData[0].content.push(newTopic);
    setData(copyData);
  };
  return (
    <div className="add_chapter" onClick={addChapter}>
      +
    </div>
  );
};

export default AddChapter;

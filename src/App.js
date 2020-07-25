import React, { useRef, useState } from 'react';
import ListItem from './Components/List/ListItem';
import Header from './Components/Header';

const App = () => {
  const draggingTopic = useRef();
  const dragOverTopic = useRef();

  const draggingChapter = useRef();
  const dragOverChapter = useRef();

  const [isChapterDragging, setIsChapterDragging] = useState(true);

  const [subject, setSubject] = useState('');

  const [data, setData] = useState([
    {
      standard: '',
      content: [],
    },
  ]);

  const handleTopicDragStart = (e, { chapterIndex, topicIndex }) => {
    console.log('handle started');
    setIsChapterDragging(false);
    draggingTopic.current = { chapterIndex, topicIndex };
  };

  const handleTopicDragEnd = (e) => {
    e.preventDefault();
    setIsChapterDragging(true);
    console.log(draggingTopic.current, dragOverTopic.current);
    let dataCopy = JSON.parse(JSON.stringify(data));
    if (
      draggingTopic.current.chapterIndex === dragOverTopic.current.chapterIndex
    ) {
      const index = dragOverTopic.current.topicIndex;
      const chapter = dataCopy[0].content[draggingTopic.current.chapterIndex];
      if (draggingTopic.current.topicIndex > index) {
        chapter.topics.splice(
          index,
          0,
          chapter.topics[draggingTopic.current.topicIndex]
        );
        chapter.topics.splice(draggingTopic.current.topicIndex + 1, 1);
      } else if (draggingTopic.current.topicIndex < index) {
        chapter.topics.splice(
          index + 1,
          0,
          chapter.topics[draggingTopic.current.topicIndex]
        );
        chapter.topics.splice(draggingTopic.current.topicIndex, 1);
      }
      dataCopy[0].content[draggingTopic.current.chapterIndex] = chapter;
      setData(dataCopy);
    } else {
      // inter group movement
      const draggingChapter =
        dataCopy[0].content[draggingTopic.current.chapterIndex];
      const dragOverChapter =
        dataCopy[0].content[dragOverTopic.current.chapterIndex];
      const draggingTopicIndex = draggingTopic.current.topicIndex;
      const dragOverTopicIndex = dragOverTopic.current.topicIndex;

      dragOverChapter.topics.splice(
        dragOverTopicIndex,
        0,
        draggingChapter.topics[draggingTopicIndex]
      );

      draggingChapter.topics.splice(draggingTopicIndex, 1);

      dataCopy[0].content[dragOverTopic.current.chapterIndex] = dragOverChapter;
      dataCopy[0].content[draggingTopic.current.chapterIndex] = draggingChapter;
      setData(dataCopy);
    }
    draggingTopic.current = null;
    dragOverTopic.current = null;
  };

  const handleTopicDragEnter = (e, { chapterIndex, topicIndex }) => {
    dragOverTopic.current = { chapterIndex, topicIndex };
  };

  const handleChapterDragStart = (e, chapterIndex) => {
    draggingChapter.current = chapterIndex;
  };

  const handleChapterDragEnd = (e) => {
    if (!isChapterDragging) return;
    const copyData = JSON.parse(JSON.stringify(data));
    const draggingIndex = draggingChapter.current;
    const draggedOverIndex = dragOverChapter.current;

    if (draggingIndex > draggedOverIndex) {
      copyData[0].content.splice(
        draggedOverIndex,
        0,
        copyData[0].content[draggingIndex]
      );
      copyData[0].content.splice(draggingIndex + 1, 1);
    } else if (draggingIndex < draggedOverIndex) {
      copyData[0].content.splice(
        draggedOverIndex + 1,
        0,
        copyData[0].content[draggingIndex]
      );
      copyData[0].content.splice(draggingIndex, 1);
    }
    draggingChapter.current = null;
    dragOverChapter.current = null;
    setData(copyData);
  };

  const handleChapterDragEnter = (e, chapterIndex) => {
    dragOverChapter.current = chapterIndex;
  };

  const onTopicEntered = (chapterIndex, topic, cb) => {
    if (topic === '') {
      return;
    }

    const copyData = [...data];
    copyData[0].content[chapterIndex].topics.push({
      id: Math.floor(Math.random() * 10000),
      name: topic,
    });
    setData(copyData);
    cb();
  };

  const onTopicChange = (topic, chapterIndex, topicIndex) => {
    if (topic === undefined) return;
    const copyData = JSON.parse(JSON.stringify(data));
    copyData[0].content[chapterIndex].topics[topicIndex].name = topic;
    setData(copyData);
    console.log(copyData);
  };

  const changeSubjectName = (title, chapterIndex) => {
    console.log(title, chapterIndex);
    if (title === undefined) {
      return;
    }
    const copyData = JSON.parse(JSON.stringify(data));
    copyData[0].content[chapterIndex].chapterTitle = title;
    setData(copyData);
  };

  return (
    <div>
      <Header
        subject={subject}
        setSubject={setSubject}
        data={data}
        setData={setData}
      />
      <ListItem>
        <ListItem.SubHeader data={data} setStandard={setData} />
        {data[0].content.map((chapter, chapterIndex) => (
          <ListItem.Chapter
            chapterTitle={chapter.chapterTitle}
            key={chapterIndex}
            data={data}
            setData={setData}
            chapterIndex={chapterIndex}
            onDragStart={handleChapterDragStart}
            onDragEnd={handleChapterDragEnd}
            changeSubjectName={changeSubjectName}
            onDragEnter={handleChapterDragEnter}
          >
            {chapter.topics.map((topic, topicIndex) => (
              <ListItem.Chapter.Topic
                key={topicIndex}
                name={topic.name}
                data={data}
                setData={setData}
                chapterIndex={chapterIndex}
                topicIndex={topicIndex}
                onDragStart={handleTopicDragStart}
                onDragEnd={handleTopicDragEnd}
                onDragEnter={handleTopicDragEnter}
                onTopicChange={onTopicChange}
              />
            ))}
            <ListItem.Chapter.AddTopic
              chapterIndex={chapterIndex}
              onTopicEntered={onTopicEntered}
            />
          </ListItem.Chapter>
        ))}
        <ListItem.AddChapter data={data} setData={setData} />
      </ListItem>
    </div>
  );
};

export default App;

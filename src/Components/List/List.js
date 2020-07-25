import React, { useState, useRef } from 'react';

const List = ({ data, setData }) => {
  const [dragging, setDragging] = useState(false);
  const [isGroupDraggable, setIsGroupDraggable] = useState(false);
  const draggingItem = useRef();
  const dragOverItem = useRef();

  const draggingGroupIndex = useRef();
  const draggedOverGroupIndex = useRef();

  const getStyles = ({ groupIndex, topicIndex }) => {
    const { draggingGrpIndex, draggingColIndex } = draggingItem.current;
    if (draggingGrpIndex === groupIndex && draggingColIndex === topicIndex) {
      return 'draggable current';
    }
    return 'draggable';
  };

  const handleTopicDragStart = (e, { groupIndex, topicIndex }) => {
    console.log('drag start');
    setIsGroupDraggable(false);
    draggingItem.current = { groupIndex, topicIndex };
    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnter = (e, { groupIndex, topicIndex }) => {
    console.log('topic Enter');
    dragOverItem.current = { groupIndex, topicIndex };
  };

  const handleTopicDragEnd = (e) => {
    console.log('drag end topic');
    setIsGroupDraggable(true);
    let dataCopy = JSON.parse(JSON.stringify(data));
    if (draggingItem.current.groupIndex === dragOverItem.current.groupIndex) {
      const index = dragOverItem.current.topicIndex;
      const group = dataCopy[draggingItem.current.groupIndex];
      if (draggingItem.current.topicIndex > index) {
        group.topics.splice(
          index,
          0,
          group.topics[draggingItem.current.topicIndex]
        );
        group.topics.splice(draggingItem.current.topicIndex + 1, 1);
      } else if (draggingItem.current.topicIndex < index) {
        group.topics.splice(
          index + 1,
          0,
          group.topics[draggingItem.current.topicIndex]
        );
        group.topics.splice(draggingItem.current.topicIndex, 1);
      }
      dataCopy[draggingItem.current.groupIndex] = group;
      setData(dataCopy);
    } else {
      // inter group movement
      const draggingGroup = dataCopy[draggingItem.current.groupIndex];
      const dragOverGroup = dataCopy[dragOverItem.current.groupIndex];
      const draggingTopicIndex = draggingItem.current.topicIndex;
      const dragOverTopicIndex = dragOverItem.current.topicIndex;

      dragOverGroup.topics.splice(
        dragOverTopicIndex,
        0,
        draggingGroup.topics[draggingTopicIndex]
      );

      draggingGroup.topics.splice(draggingTopicIndex, 1);

      dataCopy[dragOverItem.current.groupIndex] = dragOverGroup;
      dataCopy[draggingItem.current.groupIndex] = draggingGroup;
      setData(dataCopy);
    }
    draggingItem.current = null;
    dragOverItem.current = null;
    setDragging(false);
  };

  const handleGroupDragStart = (e, groupIndex) => {
    console.log('group drag start');
    if (!isGroupDraggable) return;
    draggingGroupIndex.current = groupIndex;
  };

  const handleGroupDragEnd = (e) => {
    console.log('group drag end');
    if (!isGroupDraggable) return;
    const copyData = JSON.parse(JSON.stringify(data));
    const draggingIndex = draggingGroupIndex.current;
    const draggedOverIndex = draggedOverGroupIndex.current;

    if (draggingIndex > draggedOverIndex) {
      copyData.splice(draggedOverIndex, 0, copyData[draggingIndex]);
      copyData.splice(draggingIndex + 1, 1);
    } else if (draggingIndex < draggedOverIndex) {
      copyData.splice(draggedOverIndex + 1, 0, copyData[draggingIndex]);
      copyData.splice(draggingIndex, 1);
    }
    draggingGroupIndex.current = null;
    draggedOverGroupIndex.current = null;
    setData(copyData);
  };

  const handleGroupDragEnter = (e, groupIndex) => {
    if (!isGroupDraggable) return;
    draggedOverGroupIndex.current = groupIndex;
    console.log('group enter');
  };

  return (
    <div>
      <div className="container" id="chapter-1">
        {data &&
          data.map((chapter, groupIndex) => (
            <div
              key={chapter.id}
              draggable={isGroupDraggable}
              onDragStart={(e) => handleGroupDragStart(e, groupIndex)}
              onDragEnd={handleGroupDragEnd}
              onDragEnter={(e) => {
                handleGroupDragEnter(e, groupIndex);
              }}
            >
              <h2> {chapter.chapterTitle} </h2>
              <div>
                {chapter.topics.map((topic, topicIndex) => (
                  <h3
                    className={
                      dragging
                        ? getStyles({ groupIndex, topicIndex })
                        : ' draggable'
                    }
                    key={topicIndex}
                    draggable="true"
                    onDragStart={(e) => {
                      handleTopicDragStart(e, { groupIndex, topicIndex });
                    }}
                    onDragEnter={(e) => {
                      handleDragEnter(e, { groupIndex, topicIndex });
                    }}
                    onDragEnd={handleTopicDragEnd}
                  >
                    {topic.name}
                  </h3>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default List;

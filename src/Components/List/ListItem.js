import React from 'react';
import Chapter from './Chapter';

const ListItem = (props) => {
  return <div>{props.children}</div>;
};

ListItem.Chapter = Chapter;

export default ListItem;

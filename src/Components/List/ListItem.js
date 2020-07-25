import React from 'react';
import Chapter from './Chapter';
import SubHeader from '../SubHeader';
import AddChapter from '../AddChapter';

const ListItem = (props) => {
  return <div>{props.children}</div>;
};

ListItem.AddChapter = AddChapter;
ListItem.SubHeader = SubHeader;
ListItem.Chapter = Chapter;

export default ListItem;

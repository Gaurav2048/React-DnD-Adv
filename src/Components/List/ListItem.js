import React from 'react';
import Chapter from './Chapter';
import SubHeader from '../SubHeader';

const ListItem = (props) => {
  return <div>{props.children}</div>;
};

ListItem.SubHeader = SubHeader;
ListItem.Chapter = Chapter;

export default ListItem;

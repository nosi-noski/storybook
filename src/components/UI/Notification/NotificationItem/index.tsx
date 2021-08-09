import React from 'react';
import {
  Item,
  Title,
  Author,
  Message,
  Date,
  DateTime,
} from './styles';

interface Props {
  id: number;
  title: string;
  author: string;
  dateTime: string;
}

export const NotificationItem = ({
  id,
  title,
  author,
  dateTime,
}:Props) => (
  <Item>
    <Message>
      <Author>{author}</Author>
      <Title> {title}</Title>
    </Message>
    <Date>
      <DateTime>{dateTime}</DateTime>
    </Date>
  </Item>
);

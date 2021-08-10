import React from 'react';
import {
  Item,
  AvatarImg,
  Body,
  Title,
  Author,
  MessageRow,
  DateRow,
  DateTime,
} from './styles';

interface Props {
  id: number;
  title: string;
  author: string;
  dateTime: string;
  isViewed: boolean;
  avatar?: string;
  onClick?: (id: number, event: React.MouseEvent<HTMLDivElement>) => void;
}

export const NotificationItem = ({
  id,
  title,
  author,
  dateTime,
  avatar,
  isViewed,
  onClick,
}:Props) => {
  const elementClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    if (onClick && typeof (onClick) === 'function') {
      onClick(id, event);
    }
  };
  return (
    <Item onClick={elementClickHandler} isViewed={isViewed}>
      {avatar && <AvatarImg src={avatar} />}
      <Body>
        <MessageRow>
          <Author>{author}</Author>
          <Title> {title}</Title>
        </MessageRow>
        <DateRow>
          <DateTime>{dateTime}</DateTime>
        </DateRow>
      </Body>
    </Item>
  );
};

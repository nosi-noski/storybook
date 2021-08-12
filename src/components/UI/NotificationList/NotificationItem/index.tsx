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

export interface Notification {
  id: number;
  title: string;
  author: string;
  dateTime: string;
  isViewed: boolean;
  avatar?: string;
}

interface Props extends Notification {
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
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    onClick?.(id, event);
  };
  return (
    <Item onClick={handleClick} isViewed={isViewed}>
      {avatar && <AvatarImg src={avatar} />}
      <Body>
        <MessageRow>
          <Title><Author>{author}</Author> {title}</Title>
        </MessageRow>
        <DateRow>
          <DateTime>{dateTime}</DateTime>
        </DateRow>
      </Body>
    </Item>
  );
};

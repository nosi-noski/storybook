import React from 'react';
import { NotificationItem as MuiNotificationItem } from './NotificationItem';

import {
  Paper,
  Middle,
  Bottom,
  Button,
  NoNotificationsImg,
  Item,
} from './styled';

type NotificationItem = {
  id: number;
  title: string;
  author: string;
  dateTime: string;
};

interface Props {
  count?: number;
  notificationList: NotificationItem[]
}

export function Notification({ count, notificationList }:Props) {
  return (
    <Paper>
      <Middle>
        { !count && <NoNotificationsImg />}
        { count && notificationList.map((item) => {
          const {
            id,
            title,
            author,
            dateTime,
          } = item;
          return (
            <MuiNotificationItem
              key={id}
              id={id}
              title={title}
              author={author}
              dateTime={dateTime}
            />
          );
        })}
      </Middle>
      <Bottom>
        <Button
          size="small"
          assign="plain"
        >Отметить все как прочитанное
        </Button>
        <Button
          size="small"
          assign="plain"
        >Все уведомления
        </Button>
      </Bottom>
    </Paper>
  );
}

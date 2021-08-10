import React from 'react';
import { NotificationItem as MuiNotificationItem } from './NotificationItem';

import {
  Paper,
  Middle,
  Bottom,
  Button,
  EmptyListImg,
  EmptyListText,
  EmptyListTitle,
  LinkButton,
} from './styled';

type NotificationItem = {
  id: number;
  title: string;
  author: string;
  dateTime: string;
  isViewed: boolean;
  avatar?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
};

interface Props {
  notificationList: NotificationItem[],
  elementOnClick?: (id: number, event: React.MouseEvent<HTMLDivElement>) => void;
  makeAllIsViewedButton?: () => void;
  showAllButton?: () => void;
  isMakeAllViewedButtonDisabled?: boolean;
}

export function Notification({
  notificationList,
  elementOnClick,
  makeAllIsViewedButton,
  showAllButton,
  isMakeAllViewedButtonDisabled = false,
}:Props) {
  const clickElementHandler = (id: number, event: React.MouseEvent<HTMLDivElement>) => {
    if (elementOnClick) elementOnClick(id, event);
  };
  const clickMakeAllIsViewedHandler = () => {
    if (makeAllIsViewedButton) makeAllIsViewedButton();
  };
  const clickShowAllHandler = () => {
    if (showAllButton) showAllButton();
  };
  const count = notificationList ? notificationList.length : 0;
  return (
    <Paper count={count}>
      <Middle>
        { (!notificationList || notificationList.length <= 0) && (
          <>
            <EmptyListImg />
            <EmptyListTitle>Новых уведомлений нет</EmptyListTitle>
            <EmptyListText>
              Но вы можете
              <LinkButton onClick={clickShowAllHandler}> Посмотреть все </LinkButton>
              полученные уведомления
            </EmptyListText>
          </>
        )}
        { notificationList && notificationList.length > 0 && notificationList.map((item) => {
          const {
            id,
            title,
            author,
            dateTime,
            avatar,
            isViewed,
          } = item;
          return (
            <MuiNotificationItem
              key={id}
              id={id}
              title={title}
              author={author}
              dateTime={dateTime}
              avatar={avatar}
              isViewed={isViewed}
              onClick={clickElementHandler}
            />
          );
        })}
      </Middle>
      { notificationList && notificationList.length > 0 && (
        <Bottom>
          <Button
            size="small"
            assign="plain"
            onClick={clickMakeAllIsViewedHandler}
            disabled={isMakeAllViewedButtonDisabled}
          >Отметить все как прочитанное
          </Button>
          <Button
            size="small"
            assign="plain"
            onClick={clickShowAllHandler}
          >Все уведомления
          </Button>
        </Bottom>
      )}
    </Paper>
  );
}

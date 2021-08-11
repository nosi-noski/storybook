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
  toggleButtonOnClick?: () => void;
  showAllButtonOnClick?: () => void;
  isToggleButtonDisabled?: boolean;
}

export function Notification({
  notificationList,
  elementOnClick,
  toggleButtonOnClick,
  showAllButtonOnClick,
  isToggleButtonDisabled = false,
}:Props) {
  const handleElementClick = (id: number, event: React.MouseEvent<HTMLDivElement>) => {
    if (elementOnClick) elementOnClick(id, event);
  };
  const handleToggleButtonClick = () => {
    if (toggleButtonOnClick) toggleButtonOnClick();
  };
  const handleshowAllButtonClick = () => {
    if (showAllButtonOnClick) showAllButtonOnClick();
  };
  const count = notificationList ? notificationList.length : 0;
  return (
    <Paper count={count}>
      <Middle>
        { !count && (
          <>
            <EmptyListImg />
            <EmptyListTitle>Новых уведомлений нет</EmptyListTitle>
            <EmptyListText>
              Но вы можете
              <LinkButton onClick={handleshowAllButtonClick}> Посмотреть все </LinkButton>
              полученные уведомления
            </EmptyListText>
          </>
        )}
        { !!count && notificationList.map((item) => {
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
              onClick={handleElementClick}
            />
          );
        })}
      </Middle>
      { !!count && (
        <Bottom>
          <Button
            size="small"
            assign="plain"
            onClick={handleToggleButtonClick}
            disabled={isToggleButtonDisabled}
          >Отметить все как прочитанное
          </Button>
          <Button
            size="small"
            assign="plain"
            onClick={handleshowAllButtonClick}
          >Все уведомления
          </Button>
        </Bottom>
      )}
    </Paper>
  );
}

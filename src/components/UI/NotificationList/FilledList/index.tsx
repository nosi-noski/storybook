import React from 'react';
import { NotificationItem as MuiNotificationItem } from '../NotificationItem';
import {
  Middle,
  Bottom,
  Button,
} from '../styled';

interface NotificationItem {
  id: number;
  title: string;
  author: string;
  dateTime: string;
  isViewed: boolean;
  avatar?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
interface Props {
  notificationList: NotificationItem[],
  onClick?: (id: number, event: React.MouseEvent<HTMLDivElement>) => void;
  onToggleButtonClick?: () => void;
  onShowAllButtonClick?: () => void;
  isToggleButtonDisabled?: boolean;
}
export const FilledList = ({
  notificationList,
  onClick,
  onToggleButtonClick,
  onShowAllButtonClick,
  isToggleButtonDisabled = false,
}:Props) => (
  <>
    <Middle>
      {
        notificationList.map((item) => {
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
              onClick={onClick}
            />
          );
        })
      }
    </Middle>
    <Bottom>
      <Button
        size="small"
        assign="plain"
        onClick={onToggleButtonClick}
        disabled={isToggleButtonDisabled}
      >Отметить все как прочитанное
      </Button>
      <Button
        size="small"
        assign="plain"
        onClick={onShowAllButtonClick}
      >Все уведомления
      </Button>
    </Bottom>
  </>
);

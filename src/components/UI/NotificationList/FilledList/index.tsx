import React from 'react';
import { NotificationItem as MuiNotificationItem, Notification } from '../NotificationItem';
import {
  Middle,
  Bottom,
  Button,
} from '../styled';

interface Props {
  notificationList: Notification[],
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
      {notificationList.map((item) => (
        <MuiNotificationItem key={item.id} onClick={onClick} {...item} />
      ))}
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

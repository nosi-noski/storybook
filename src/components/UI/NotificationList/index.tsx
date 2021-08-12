import React from 'react';
import { NotificationItem as MuiNotificationItem } from './NotificationItem';
import { EmptyList } from './EmptyList';
import { FilledList } from './FilledList';
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
  verticalAlign?: string;
  horisontalAlign?: string;
}

export function NotificationList({
  notificationList,
  onClick,
  onToggleButtonClick,
  onShowAllButtonClick,
  isToggleButtonDisabled = false,
  verticalAlign = 'top',
  horisontalAlign = 'right',
}:Props) {
  const handleElementClick = (id: number, event: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      onClick(id, event);
    }
  };
  const handleToggleButtonClick = () => {
    if (onToggleButtonClick) {
      onToggleButtonClick();
    }
  };
  const handleShowAllButtonClick = () => {
    if (onShowAllButtonClick) {
      onShowAllButtonClick();
    }
  };
  const count = notificationList.length;
  return (
    <Paper count={count} vertical={verticalAlign} horizontal={horisontalAlign}>
      { !count && <EmptyList onClick={handleShowAllButtonClick} />}
      { count > 0 && (
        <FilledList
          notificationList={notificationList}
          onClick={handleElementClick}
          onToggleButtonClick={handleToggleButtonClick}
          onShowAllButtonClick={handleShowAllButtonClick}
          isToggleButtonDisabled={isToggleButtonDisabled}
        />
      )}
    </Paper>
  );
}

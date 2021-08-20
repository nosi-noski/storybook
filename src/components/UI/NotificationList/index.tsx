import React from 'react';
import { EmptyList } from './EmptyList';
import { FilledList } from './FilledList';
import { Notification } from './NotificationItem';
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

interface Props {
  notificationList: Notification[],
  onClick?: (id: number, event: React.MouseEvent<HTMLDivElement>) => void;
  onToggleButtonClick?: () => void;
  onShowAllButtonClick?: () => void;
  isToggleButtonDisabled?: boolean;
  verticalAlign?: 'top' | 'bottom';
  horisontalAlign?: 'left' | 'right';
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
    onClick?.(id, event);
  };
  const handleToggleButtonClick = () => {
    onToggleButtonClick?.();
  };
  const handleShowAllButtonClick = () => {
    onShowAllButtonClick?.();
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

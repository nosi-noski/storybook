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
  elementOnClick?: (id: number, event: React.MouseEvent<HTMLDivElement>) => void;
  toggleButtonOnClick?: () => void;
  showAllButtonOnClick?: () => void;
  isToggleButtonDisabled?: boolean;
  verticalPosition?: string;
  horisontalPosition?: string;
}

export function NotificationList({
  notificationList,
  elementOnClick,
  toggleButtonOnClick,
  showAllButtonOnClick,
  isToggleButtonDisabled = false,
  verticalPosition = 'top',
  horisontalPosition = 'right',
}:Props) {
  const handleElementClick = (id: number, event: React.MouseEvent<HTMLDivElement>) => {
    if (elementOnClick) {
      elementOnClick(id, event);
    }
  };
  const handleToggleButtonClick = () => {
    if (toggleButtonOnClick) {
      toggleButtonOnClick();
    }
  };
  const handleShowAllButtonClick = () => {
    if (showAllButtonOnClick) {
      showAllButtonOnClick();
    }
  };
  const count = notificationList.length;
  return (
    <Paper count={count} vertical={verticalPosition} horizontal={horisontalPosition}>
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

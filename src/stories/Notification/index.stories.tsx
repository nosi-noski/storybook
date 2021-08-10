import React, { useState, useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Notification as MuiNotification } from '../../components/UI/Notification';

type NotificationItem = {
  id: number;
  title: string;
  author: string;
  dateTime: string;
  avatar?: string;
  isViewed: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
};

interface Props {
  notificationList: NotificationItem[];
  elementOnClick?: (id: number, event: React.MouseEvent<HTMLDivElement>) => void;
  makeAllIsViewedButton?: () => void;
  showAllButton?: () => void;
  isMakeAllViewedButtonDisabled?: boolean;
}

function Notification({
  notificationList,
  elementOnClick,
  makeAllIsViewedButton,
  showAllButton,
  isMakeAllViewedButtonDisabled = false,
}:Props) {
  const [notifications, setNotifications] = useState<NotificationItem[]>(notificationList);
  const [reload, setReload] = useState<boolean>(false);
  const makeAllIsViewed = (notificationItems: NotificationItem[]) => {
    const changedArray = notificationItems.map((notification) => {
      notification.isViewed = true;
      return notification;
    });
    return changedArray;
  };
  const handleMakeAllIsViewedButtonClick = () => {
    const changedNotifications = makeAllIsViewed(notifications);
    setNotifications([...changedNotifications]);
    if (makeAllIsViewedButton) makeAllIsViewedButton();
  };
  const handleShowAllButtonClick = () => {
    if (showAllButton) showAllButton();
  };
  const handleElementClick = (id: number, event: React.MouseEvent<HTMLDivElement>) => {
    const changedList = notificationList.map((notification) => {
      if (notification.id === id) notification.isViewed = true;
      return notification;
    });
    setNotifications([...changedList]);
  };
  useEffect(() => {
    if (!reload) {
      setReload(true);
    }
  }, [reload]);

  useEffect(() => {
    setReload(false);
  }, [reload]);
  return (
    <MuiNotification
      notificationList={notifications}
      elementOnClick={handleElementClick}
      makeAllIsViewedButton={handleMakeAllIsViewedButtonClick}
      showAllButton={handleShowAllButtonClick}
      isMakeAllViewedButtonDisabled={isMakeAllViewedButtonDisabled}
    />
  );
}

export default {
  title: 'UI/Component/Notification',
  component: Notification,
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => <Notification {...args} />;

export const General = Template.bind({});
General.args = {
  elementOnClick: action('Клик по уведомлению'),
  makeAllIsViewedButton: action('Клик по кнопке "Отметить все как прочитанное"'),
  showAllButton: action('Клик по кнопке "Все уведомления"'),
  notificationList: [
    {
      id: 1,
      title: 'Заголовок уведомления, здесь много текста, весь текст не помещается, придётся сткрывать излишки',
      author: 'Брюс Уэйн',
      dateTime: '2021-12-31 00:19',
      avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-48.png',
      isViewed: true,
    },
    {
      id: 2,
      title: 'Заголовок',
      author: 'Ч Ч Ч ',
      dateTime: '2021-12-31 00:20',
      avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-48.png',
      isViewed: false,
    },
    {
      id: 3,
      title: 'Заголовок3',
      author: 'Человеков Человек Человекович',
      dateTime: '2021-12-31 00:21',
      avatar: '',
      isViewed: false,
    },
    {
      id: 4,
      title: 'Заголовок 0000000000 1111111111 2222222222 3333333333 4444444444 5555555555 6666666666 7777777777 8888888888 9999999999 ',
      author: 'Автор А.А.',
      dateTime: '2021-12-31 00:21',
      avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/indian_man_male_person-48.png',
      isViewed: false,
    },
    {
      id: 5,
      title: 'З',
      author: 'Г',
      dateTime: '2021-12-31 00:21',
      avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/sloth_lazybones_sluggard_avatar-48.png',
      isViewed: false,
    },
    {
      id: 6,
      title: 'Заголовок уведомления, здесь много текста, весь текст не помещается, придётся скрывать излишки',
      author: 'Человеков Человек Человекович',
      dateTime: '2021-12-31 00:21',
      isViewed: false,
    },
  ],
};

export const Empty = Template.bind({});
Empty.args = {};

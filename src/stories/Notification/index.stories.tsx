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
  toggleButtonOnClick?: () => void;
  showAllButtonOnClick?: () => void;
  isToggleButtonDisabled?: boolean;
}

function Notification({
  notificationList,
  elementOnClick,
  toggleButtonOnClick,
  showAllButtonOnClick,
  isToggleButtonDisabled = false,
}:Props) {
  const [notifications, setNotifications] = useState<NotificationItem[]>(notificationList);
  const [isDisabled, setIsDisabled] = useState<boolean>(isToggleButtonDisabled);
  const [reload, setReload] = useState<boolean>(false);
  const makeAllIsViewed = (notificationItems: NotificationItem[]) => {
    const changedArray = notificationItems.map((notification) => {
      notification.isViewed = true;
      return notification;
    });
    return changedArray;
  };
  const handletoggleButtonClick = () => {
    const changedNotifications = makeAllIsViewed(notifications);
    setIsDisabled(true);
    setNotifications([...changedNotifications]);
    if (toggleButtonOnClick) toggleButtonOnClick();
  };
  const handleShowAllButtonClick = () => {
    if (showAllButtonOnClick) showAllButtonOnClick();
  };
  const handleElementClick = (id: number, event: React.MouseEvent<HTMLDivElement>) => {
    const changedList = notificationList.map((notification) => {
      if (notification.id === id) notification.isViewed = true;
      return notification;
    });
    setNotifications([...changedList]);
    if (elementOnClick) elementOnClick(id, event);
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
      toggleButtonOnClick={handletoggleButtonClick}
      showAllButtonOnClick={handleShowAllButtonClick}
      isToggleButtonDisabled={isDisabled}
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
  toggleButtonOnClick: action('Клик по кнопке "Отметить все как прочитанное"'),
  showAllButtonOnClick: action('Клик по кнопке "Все уведомления"'),
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

export const OneNotification = Template.bind({});
OneNotification.args = {
  isToggleButtonDisabled: true,
  elementOnClick: action('Клик по уведомлению'),
  toggleButtonOnClick: action('Клик по кнопке "Отметить все как прочитанное"'),
  showAllButtonOnClick: action('Клик по кнопке "Все уведомления"'),
  notificationList: [
    {
      id: 2,
      title: 'Заголовок',
      author: 'Автор А.А.',
      dateTime: '2021-12-31 00:20',
      avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-48.png',
      isViewed: true,
    },
  ],
};

export const TwoNotifications = Template.bind({});
TwoNotifications.args = {
  elementOnClick: action('Клик по уведомлению'),
  toggleButtonOnClick: action('Клик по кнопке "Отметить все как прочитанное"'),
  showAllButtonOnClick: action('Клик по кнопке "Все уведомления"'),
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
      author: 'Автор А.А.',
      dateTime: '2021-12-31 00:20',
      avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-48.png',
      isViewed: false,
    },
  ],
};

export const Empty = Template.bind({});
Empty.args = {};

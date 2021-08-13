import React, { useState, useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { NotificationList as MuiNotificationList } from '../../components/UI/NotificationList';
import { Notification } from '../../components/UI/NotificationList/NotificationItem';

interface Props {
  notificationList: Notification[];
  onClick?: (id: number, event: React.MouseEvent<HTMLDivElement>) => void;
  onToggleButtonClick?: () => void;
  onShowAllButtonClick?: () => void;
  isToggleButtonDisabled?: boolean;
  verticalAlign?: string;
  horisontalAlign?: string;
}

function NotificationList({
  notificationList,
  onClick,
  onToggleButtonClick,
  onShowAllButtonClick,
  isToggleButtonDisabled,
  horisontalAlign,
  verticalAlign,
}:Props) {
  const [notifications, setNotifications] = useState<Notification[]>(notificationList);
  const [isDisabled, setIsDisabled] = useState<boolean>(isToggleButtonDisabled);
  const [reload, setReload] = useState<boolean>(false);
  const makeAllIsViewed = (notificationItems: Notification[]) => {
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
    onToggleButtonClick?.();
  };
  const handleShowAllButtonClick = () => {
    onShowAllButtonClick?.();
  };
  const handleElementClick = (id: number, event: React.MouseEvent<HTMLDivElement>) => {
    const changedList = notificationList.map((notification) => {
      if (notification.id === id) {
        notification.isViewed = true;
      }
      return notification;
    });
    setNotifications([...changedList]);
    onClick?.(id, event);
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
    <MuiNotificationList
      verticalAlign={verticalAlign}
      horisontalAlign={horisontalAlign}
      notificationList={notifications}
      onClick={handleElementClick}
      onToggleButtonClick={handletoggleButtonClick}
      onShowAllButtonClick={handleShowAllButtonClick}
      isToggleButtonDisabled={isDisabled}
    />
  );
}

export default {
  title: 'UI/Component/Notification',
  component: NotificationList,
  argTypes: {
    verticalAlign: {
      options: ['top', 'bottom'],
      control: { type: 'radio' },
    },
    horisontalAlign: {
      options: ['left', 'right'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const General = Template.bind({});
General.args = {
  onClick: action('Клик по уведомлению'),
  onToggleButtonClick: action('Клик по кнопке "Отметить все как прочитанное"'),
  onShowAllButtonClick: action('Клик по кнопке "Все уведомления"'),
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
      title: 'Потерялась',
      author: 'Девочка Зелёный Фон ',
      dateTime: '2021-12-31 00:20',
      avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-48.png',
      isViewed: false,
    },
    {
      id: 3,
      title: 'Добавлен в группу',
      author: 'Анонимов Собеседник Безаватарович',
      dateTime: '2021-12-31 00:21',
      avatar: '',
      isViewed: false,
    },
    {
      id: 4,
      title: 'Пользователь отклонил согласование сценария',
      author: 'Романов Писатель Автографич',
      dateTime: '2021-12-31 00:21',
      avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/indian_man_male_person-48.png',
      isViewed: false,
    },
    {
      id: 5,
      title: 'Распалась.',
      author: 'РСФСР',
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
  onClick: action('Клик по уведомлению'),
  onToggleButtonClick: action('Клик по кнопке "Отметить все как прочитанное"'),
  onShowAllButtonClick: action('Клик по кнопке "Все уведомления"'),
  notificationList: [
    {
      id: 2,
      title: 'Потерялась',
      author: 'Девочка Зелёный Фон ',
      dateTime: '2021-12-31 00:20',
      avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-48.png',
      isViewed: false,
    },
  ],
};

export const TwoNotifications = Template.bind({});
TwoNotifications.args = {
  onClick: action('Клик по уведомлению'),
  onToggleButtonClick: action('Клик по кнопке "Отметить все как прочитанное"'),
  onShowAllButtonClick: action('Клик по кнопке "Все уведомления"'),
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
      title: 'Потерялась',
      author: 'Девочка Зелёный Фон ',
      dateTime: '2021-12-31 00:20',
      avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-48.png',
      isViewed: false,
    },
  ],
};

export const ThreeNotifications = Template.bind({});
ThreeNotifications.args = {
  onClick: action('Клик по уведомлению'),
  onToggleButtonClick: action('Клик по кнопке "Отметить все как прочитанное"'),
  onShowAllButtonClick: action('Клик по кнопке "Все уведомления"'),
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
      title: 'Потерялась',
      author: 'Девочка Зелёный Фон ',
      dateTime: '2021-12-31 00:20',
      avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-48.png',
      isViewed: false,
    },
    {
      id: 3,
      title: 'Добавлен в группу',
      author: 'Анонимов Собеседник Безаватарович',
      dateTime: '2021-12-31 00:21',
      avatar: '',
      isViewed: false,
    },
  ],
};

export const Empty = Template.bind({});
Empty.args = {
  notificationList: [],
};

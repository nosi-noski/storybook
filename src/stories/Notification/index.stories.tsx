import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Notification as MuiNotification } from '../../components/UI/Notification';

type NotificationItem = {
  id: number;
  title: string;
  author: string;
  dateTime: string;
};

interface Props {
  count?: number;
  notificationList: NotificationItem[];
}

function Notification({ count, notificationList }:Props) {
  return (
    <MuiNotification
      count={count}
      notificationList={notificationList}
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
  count: 1,
  notificationList: [
    {
      id: 1,
      title: 'Заголовок уведомления, здесь много текста, весь текст не помещается, придётся сткрывать излишки',
      author: 'Человеков Человек Человекович',
      dateTime: '2021-12-31 00:19',
    },
    {
      id: 2,
      title: 'Заголовок',
      author: 'Ч Ч Ч ',
      dateTime: '2021-12-31 00:20',
    },
    {
      id: 3,
      title: 'Заголовок3',
      author: 'Человеков Человек Человекович',
      dateTime: '2021-12-31 00:21',
    },
  ],
};

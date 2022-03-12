import moment from 'moment';
import React from 'react';
import {View} from 'react-native';
import NotificationCard from '../../components/NotificationCard';
import {notificationType} from '../../config/typings';

const notifications = [
  {
    id: 1,
    type: notificationType.approved,
    detail: 'Wayne',
    date: moment().format('DD MMM, YYYY'),
    img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  },
  {
    id: 2,
    type: notificationType.requested,
    detail: 'Wayne',
    date: moment().format('DD MMM, YYYY'),
    img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  },
  {
    id: 3,
    type: notificationType.approved,
    detail: 'Wayne',
    date: moment().format('DD MMM, YYYY'),
    img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  },
];
export const NotificationScreen = props => {
  return (
    <View>
      {notifications.map(notification => (
        <NotificationCard key={notification.id} {...notification} />
      ))}
    </View>
  );
};

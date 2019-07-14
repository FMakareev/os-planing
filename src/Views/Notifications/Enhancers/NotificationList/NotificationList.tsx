import * as React from 'react';
import Preloader, {PreloaderSizeEnum, PreloaderThemeEnum} from "../../../../Components/Preloader/Preloader";
import InfinityScrollHoc from "../../../../Enhancers/InfinityScrollHOC/InfinityScrollHOC";
import InfinityScroll from "../../../../Components/InfinityScroll/InfinityScroll";
import NotificationListQuery from './NotificationListQuery.graphql';
import NotificationItem from '../../Components/NotificationItem/NotificationItem';
import {INotification, IUser} from '../../../../Apollo/schema';
import GetNotReadCountNotification from '../GetNotReadCountNotification/GetNotReadCountNotification';
import config from "../../../../config";


interface INotificationListProps {
  [prop: string]: any
}

// TODO: переделать на конект к стору чтобы данные были всегда валидными
let UserJson = localStorage.getItem('user_data');
const User: IUser = UserJson ? JSON.parse(UserJson) : {};


const InfinityScrollWithQuery = InfinityScrollHoc<INotification>(InfinityScroll)({
  query: NotificationListQuery,
  queryName: 'notificationPagination',
  variables: {
    ...config.pagination,
    user: User && User.id
  }
});

const NotificationList: React.FC<INotificationListProps> = () => {
  return (<InfinityScrollWithQuery

    PreloaderComponent={<Preloader
      style={{
        margin: '50px auto',
        display: 'block'
      }}
      theme={PreloaderThemeEnum.blue}
      size={PreloaderSizeEnum.md}
    />}

    ItemComponent={(props: INotification) => (
      <NotificationItem
        {...props}
      />)}
  />)
};

export default GetNotReadCountNotification(NotificationList);
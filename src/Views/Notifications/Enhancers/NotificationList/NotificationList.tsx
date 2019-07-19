import * as React from 'react';
import Preloader, {PreloaderSizeEnum, PreloaderThemeEnum} from "../../../../Components/Preloader/Preloader";
import InfinityScrollHoc from "../../../../Enhancers/InfinityScrollHOC/InfinityScrollHOC";
import InfinityScroll from "../../../../Components/InfinityScroll/InfinityScroll";
import NotificationListQuery from './NotificationListQuery.graphql';
import NotificationItem from '../../Components/NotificationItem/NotificationItem';
import {INotification, IUser} from '../../../../Apollo/schema';
import GetNotReadCountNotification from '../GetNotReadCountNotification/GetNotReadCountNotification';
import config from "../../../../config";
import {IStoreState} from "../../../../Store/Store";


interface INotificationListProps {
  [prop: string]: any
}


const InfinityScrollWithQuery = ({variables, ...rest}: any) => {

  const Component = InfinityScrollHoc<INotification>(InfinityScroll)({
    query: NotificationListQuery,
    queryName: 'notificationPagination',
  });

  return <Component
    options={{
      fetchPolicy:'network-only',
      variables: {
        ...config.pagination,
        ...variables,
      }
    }}
    {...rest}
  />
};


const NotificationList: React.FC<INotificationListProps> = ({user}: any) => {
  return (<InfinityScrollWithQuery
    variables={{
      user: user && user.user && user.user.id
    }}
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

export default GetNotReadCountNotification(NotificationList)({pollInterval: 0});
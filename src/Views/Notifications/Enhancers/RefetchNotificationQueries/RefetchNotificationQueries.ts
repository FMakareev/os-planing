import NotificationListQuery from '../NotificationList/NotificationListQuery.graphql';

const RefetchNotificationQueries = (variables: any) => ({
  query: NotificationListQuery,
  variables: variables
});

export default RefetchNotificationQueries;
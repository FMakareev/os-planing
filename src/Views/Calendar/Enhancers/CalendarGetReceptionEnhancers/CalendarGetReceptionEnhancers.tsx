import * as React from 'react';
import ReceptionPaginationQuery from './ReceptionPaginationQuery.graphql';
import {Query, QueryResult} from 'react-apollo';
import {IPagination, IReception, IReceptionPagination} from "../../../../Apollo/schema";

interface IProps {
  [prop: string]: any
}



// TODO: типизировать запрос
const CalendarGetReceptionEnhancers = <TProps extends any>(WrappedComponent: any) => (props: IProps & TProps) => {
  return <Query
    <IReceptionPagination>
    fetchPolicy={'no-cache'}
    query={ReceptionPaginationQuery}
  >
    {
      ({data, loading,}: QueryResult<IReceptionPagination>) => {
        if (loading) {
          return null
        }
        return (<WrappedComponent
          options={data && data.receptionPagination.items}
          {...props}
        />);
      }
    }
  </Query>
};

export default CalendarGetReceptionEnhancers;
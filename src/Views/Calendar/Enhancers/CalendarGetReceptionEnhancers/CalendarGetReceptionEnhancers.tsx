import * as React from 'react';
import ReceptionPaginationQuery from './ReceptionPaginationQuery.graphql';
import {Query} from 'react-apollo';

interface IProps {
  [prop: string]: any
}

// TODO: типизировать запрос
const CalendarGetReceptionEnhancers = <TProps extends any>(WrappedComponent: any) => (props: IProps & TProps) => {
  return <Query query={ReceptionPaginationQuery}>
    {
      ({data, loading,}: any) => {
        if (loading) {
          return null
        }
        return (<WrappedComponent
          options={data.receptionPagination.items}
          {...props}
        />);
      }
    }
  </Query>
};

export default CalendarGetReceptionEnhancers;
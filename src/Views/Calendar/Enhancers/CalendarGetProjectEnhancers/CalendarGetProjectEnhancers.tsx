import * as React from 'react';
import {Query} from 'react-apollo';
import ProjectPaginationQuery from './ProjectPaginationQuery.graphql';

interface IProps {
  [prop: string]: any
}




// TODO: типизировать запрос
const CalendarGetProjectEnhancers = <TProps extends any>(WrappedComponent: any) => (props: IProps & TProps) => {
  return <Query query={ProjectPaginationQuery}>
    {
      ({data, loading,}: any) => {
        if (loading) {
          return null
        }
        return (<WrappedComponent
          options={data.projectPagination.items}
          {...props}
        />);
      }
    }
  </Query>
};

export default CalendarGetProjectEnhancers;
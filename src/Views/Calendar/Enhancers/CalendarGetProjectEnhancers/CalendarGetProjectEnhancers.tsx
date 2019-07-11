import * as React from 'react';
import {Query, QueryResult} from 'react-apollo';
import ProjectPaginationQuery from './ProjectPaginationQuery.graphql';
import {IProjectPagination} from "../../../../Apollo/schema";

interface IProps {
  [prop: string]: any
}



const CalendarGetProjectEnhancers = <TProps extends any>(WrappedComponent: any) => (props: IProps & TProps) => {
  return <Query
    <IProjectPagination>
    fetchPolicy={'no-cache'}
    query={ProjectPaginationQuery}
  >
    {
      ({data, loading,}: QueryResult<IProjectPagination>) => {
        if (loading) {
          return null
        }
        return (<WrappedComponent
          options={data && data.projectPagination.items}
          {...props}
        />);
      }
    }
  </Query>
};

export default CalendarGetProjectEnhancers;
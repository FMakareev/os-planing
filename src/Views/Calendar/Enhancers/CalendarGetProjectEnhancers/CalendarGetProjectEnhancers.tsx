import * as React from 'react';
import {graphql} from 'react-apollo';
import ProjectPaginationQuery from './ProjectPaginationQuery.graphql';

interface ICalendarGetProjectEnhancersProps {
  [prop: string]: any
}


const CalendarGetProjectEnhancers = (WrapperComponent: React.ElementType) => {
  return graphql<any,any,any>(ProjectPaginationQuery)(class extends React.Component<ICalendarGetProjectEnhancersProps> {
    render() {
      const {data} = this.props;
      if(data.loading){
        return null
      }
      return (<WrapperComponent
        options={data.projectPagination.items}
        {...this.props}
      />);
    }
  })
};

export default CalendarGetProjectEnhancers;
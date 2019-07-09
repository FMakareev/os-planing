import * as React from 'react';
import ReceptionPaginationQuery from './ReceptionPaginationQuery.graphql';
import {graphql} from 'react-apollo';

interface ICalendarGetReceptionEnhancersProps {
  [prop: string]: any
}


const CalendarGetReceptionEnhancers = (WrapperComponent: React.ElementType) => {
  return graphql<any,any,any>(ReceptionPaginationQuery)(class extends React.Component<ICalendarGetReceptionEnhancersProps> {
    render() {
      const {data} = this.props;

      if(data.loading){
        return null
      }
      return (<WrapperComponent
        options={data.receptionPagination.items}
        {...this.props}
      />);
    }
  })
};

export default CalendarGetReceptionEnhancers;
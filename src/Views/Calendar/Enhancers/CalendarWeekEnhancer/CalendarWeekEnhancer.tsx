import * as React from 'react';
import GetSimpleCalendarQuery from './GetSimpleCalendarQuery.graphql';
import {GetSimpleCalendarData, GetSimpleCalendarVariables} from "../../../../Apollo/schema";
import {Query, QueryResult} from "react-apollo";
import Preloader, {PreloaderSizeEnum, PreloaderThemeEnum} from "../../../../Components/Preloader/Preloader";


interface ICalendarWeekEnhancerProps {
  [prop: string]: any
}

const CalendarWeekEnhancer = (WrapperComponent: React.ElementType) => {
  return class extends React.Component<ICalendarWeekEnhancerProps> {

    render() {
      const {time} = this.props;
      return (<Query
        <GetSimpleCalendarData, GetSimpleCalendarVariables>
        query={GetSimpleCalendarQuery}
        variables={{
          time: time,
        }}
      >
        {
          ({data, loading, error}: QueryResult<GetSimpleCalendarData, GetSimpleCalendarVariables>) => {
            if (loading) {
              return <Preloader
                style={{
                  margin: '16px auto',
                  display: 'block'
                }}
                theme={PreloaderThemeEnum.blue}
                size={PreloaderSizeEnum.md}
              />
            }
            if (error) {
              return 'Error.'
            }
            return <WrapperComponent data={data && data.getSimpleCalendar} {...this.props}/>
          }
        }
      </Query>);
    }
  }
};

export default CalendarWeekEnhancer;
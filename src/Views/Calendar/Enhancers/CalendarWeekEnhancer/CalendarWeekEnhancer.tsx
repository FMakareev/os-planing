import * as React from 'react';
import GetSimpleCalendarQuery from './GetSimpleCalendarQuery.graphql';
import GetCalendarByProjectQuery from './GetCalendarByProjectQuery.graphql';
import GetCalendarByReceptionQuery from './GetCalendarByReceptionQuery.graphql';
import GetCalendarByReceptionAndProjectQuery from './GetCalendarByReceptionAndProjectQuery.graphql';


import {GetSimpleCalendarData, GetSimpleCalendarVariables, GetCalendarByProjectVariables, GetCalendarByProjectData,
  GetCalendarByReceptionVariables,
  GetCalendarByReceptionData,
  GetCalendarByReceptionAndProjectData,
  GetCalendarByReceptionAndProjectVariables} from "../../../../Apollo/schema";
import {Query, QueryResult} from "react-apollo";
import Preloader, {PreloaderSizeEnum, PreloaderThemeEnum} from "../../../../Components/Preloader/Preloader";


interface ICalendarWeekEnhancerProps {
  [prop: string]: any
}


const QueryRenderProps = <TData extends any, TVariables extends any> (WrapperComponent: React.ElementType, props: any, queryName: string) =>
  ({data, loading, error}: QueryResult<TData, TVariables>) => {
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
    // if (error) {
    //   return 'Ошибка'
    // }
    return <WrapperComponent data={data && data[queryName]} {...props}/>
  };


const CalendarWeekEnhancer = (WrapperComponent: React.ElementType) => {
  return class extends React.Component<ICalendarWeekEnhancerProps> {

    render() {
      const {time, project, reception} = this.props;


      if(reception && project){
        return (<Query
          <GetCalendarByReceptionAndProjectData, GetCalendarByReceptionAndProjectVariables>
          errorPolicy="ignore"
          query={GetCalendarByReceptionAndProjectQuery}
          variables={{
            time: time,
            reception,
            project
          }}
        >
          {
            QueryRenderProps<GetCalendarByReceptionAndProjectData, GetCalendarByReceptionAndProjectVariables>(
              WrapperComponent,
              this.props,
              'getCalendarByReceptionAndProject')
          }
        </Query>);
      }
      if(project){
        return (<Query
          <GetCalendarByProjectData, GetCalendarByProjectVariables>
          errorPolicy="ignore"
          query={GetCalendarByProjectQuery}
          variables={{
            time: time,
            project,
          }}
        >
          {
            QueryRenderProps<GetCalendarByProjectData, GetCalendarByProjectVariables>(WrapperComponent, this.props, 'getCalendarByProject')
          }
        </Query>);
      }
      if(reception){
        return (<Query
          <GetCalendarByReceptionData, GetCalendarByReceptionVariables>
          errorPolicy="ignore"
          query={GetCalendarByReceptionQuery}
          variables={{
            time: time,
            reception,
          }}
        >
          {
            QueryRenderProps<GetCalendarByReceptionData, GetCalendarByReceptionVariables>(
              WrapperComponent,
              this.props,
              'getCalendarByReception')
          }
        </Query>);
      }

      return (<Query
        <GetSimpleCalendarData, GetSimpleCalendarVariables>
        query={GetSimpleCalendarQuery}
        errorPolicy="ignore"
        variables={{
          time: time,
        }}
      >
        {
          QueryRenderProps<GetSimpleCalendarData, GetSimpleCalendarVariables>(WrapperComponent, this.props, 'getSimpleCalendar')
        }
      </Query>);
    }
  }
};

export default CalendarWeekEnhancer;
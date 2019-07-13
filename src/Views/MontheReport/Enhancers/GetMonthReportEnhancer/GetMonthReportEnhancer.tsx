import * as React from 'react';

import ReportItemQuery from './ReportItemQuery.graphql';
import {Query, QueryResult} from "react-apollo";
import { IMonthReportItemData, IMonthReportItemVariables} from '../../../../Apollo/schema';
import Preloader, {PreloaderSizeEnum, PreloaderThemeEnum} from "../../../../Components/Preloader/Preloader";

interface IGetMonthReportEnhancerProps {
  [prop: string]: any
}

const GetMonthReportEnhancer = (WrappedComponent: React.ElementType) => (props: IGetMonthReportEnhancerProps) => {
  const {match: {params}} = props;
  console.log(props);
  return (
    <Query
      <IMonthReportItemData, IMonthReportItemVariables>
      skip={!params.reportId}
      query={ReportItemQuery}
      variables={{
        id: params.reportId,
      }}
    >
      {
        ({data, loading, error}: QueryResult<IMonthReportItemData, IMonthReportItemVariables>) => {
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
            return 'Ошибка';
          }
          return <WrappedComponent
            data={data && data.monthReportItem}
            {...props}/>
        }
      }
    </Query>
  );
};

export default GetMonthReportEnhancer;
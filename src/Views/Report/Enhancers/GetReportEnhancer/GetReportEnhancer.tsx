import * as React from 'react';

import ReportItemQuery from './ReportItemQuery.graphql';
import {Query, QueryResult} from "react-apollo";
import {IReportItemVariables, IReportItemData} from '../../../../Apollo/schema';
import Preloader, {PreloaderSizeEnum, PreloaderThemeEnum} from "../../../../Components/Preloader/Preloader";

interface IGetReportEnhancerProps {
  [prop: string]: any
}

const GetReportEnhancer = (WrappedComponent: React.ElementType) => (props: IGetReportEnhancerProps) => {
  const {match: {params}} = props;
  console.log(props);
  return (
    <Query
      <IReportItemData, IReportItemVariables>
      skip={!params.reportId}
      query={ReportItemQuery}
      variables={{
        id: params.reportId,
      }}
    >
      {
        ({data, loading, error}: QueryResult<IReportItemData, IReportItemVariables>) => {
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
            data={data && data.reportItem}
            {...props}/>
        }
      }
    </Query>
  );
};

export default GetReportEnhancer;
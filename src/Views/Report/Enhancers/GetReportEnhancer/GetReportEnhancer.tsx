import * as React from 'react';

import ReportItemQuery from './ReportItemQuery.graphql';
import {Query, QueryResult} from "react-apollo";
import {IReportItemVariables, IReportItemData} from '../../../../Apollo/schema';
import Preloader, {PreloaderSizeEnum, PreloaderThemeEnum} from "../../../../Components/Preloader/Preloader";

interface IGetReportEnhancerProps {
  [prop: string]: any
}

const GetReportEnhancer = (WrappedComponent: React.ElementType) => (props: IGetReportEnhancerProps) => {
  const {match: {params}, data} = props;

  return (
    <Query
      <IReportItemData, IReportItemVariables>
      fetchPolicy={'no-cache'}
      skip={(data && !data.report) || (data && !data.report && !params.reportId) || !data}
      query={ReportItemQuery}
      variables={{
        id: data && data.report || params.reportId,
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
            report={data && data.reportItem}
            {...props}/>
        }
      }
    </Query>
  );
};

export default GetReportEnhancer;
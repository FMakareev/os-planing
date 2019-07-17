import * as React from 'react';
import GetProjectListQuery from '../StatisticInfinityScroll/GetProjectStatisticQuery.graphql';
import GetReceptionStatisticQuery from '../StatisticInfinityScroll/GetReceptionStatisticQuery.graphql';

import {IWithStatistic, StatisticAggregationEnum, WithStatistic} from "../StatisticContext/StatisticContext";
import {Query, QueryResult} from "react-apollo";
import config from "../../../../config";
import {
  IGetProjectStatisticData,
  IGetReceptionStatisticData,
  IGetReceptionStatisticVariables,
  IGetProjectStatisticVariables
} from "../../../../Apollo/Types/Statistics";

interface IGetStatisticXmLinkProps extends IWithStatistic {
  [prop: string]: any
}

const GetStatisticXmLink = (WrapperComponent: React.ElementType) => {
  return WithStatistic(class extends React.Component<IGetStatisticXmLinkProps> {
    render() {
      const {aggregation, filter, stopDate, startDate} = this.props;
      if (aggregation === StatisticAggregationEnum.reception  && filter) {
        return (<Query
          <IGetReceptionStatisticData, IGetReceptionStatisticVariables>
          fetchPolicy={'cache-only'}
          query={GetReceptionStatisticQuery}
          variables={{
            stopDate,
            startDate,
            project: filter,
            ...config.pagination,
          }}
        >
          {
            ({data, loading}: QueryResult<IGetReceptionStatisticData, IGetReceptionStatisticVariables>) => {
              return (<WrapperComponent
                loading={loading}
                link={data && data.getReceptionStatistic && data.getReceptionStatistic.attachment}
                {...this.props}/>);
            }
          }
        </Query>);
      }
      if (aggregation === StatisticAggregationEnum.project&& filter) {
        return (<Query
          <IGetProjectStatisticData, IGetProjectStatisticVariables>
          fetchPolicy={'cache-only'}
          query={GetProjectListQuery}
          variables={{
            stopDate,
            startDate,
            reception: filter,
            ...config.pagination,
          }}
        >
          {
            ({data, loading}: QueryResult<IGetProjectStatisticData, IGetProjectStatisticVariables>) => {
              return (<WrapperComponent
                loading={loading}
                link={data && data.getProjectStatistic && data.getProjectStatistic.attachment}
                {...this.props}/>);
            }
          }
        </Query>);
      }

      return <WrapperComponent {...this.props}/>
    }
  })
};

export default GetStatisticXmLink;
import * as React from 'react';
import GetProjectListQuery from './GetProjectListQuery.graphql';
import GetReceptionListQuery from './GetReceptionListQuery.graphql';
import {Query, QueryResult} from "react-apollo";
import {IPagination} from '../../../../Apollo/schema';
import {IWithStatistic, StatisticAggregationEnum, WithStatistic} from '../StatisticContext/StatisticContext';


interface IGetStatisticFilterDataProps extends IWithStatistic {
  [prop: string]: any
}

const GetStatisticFilterData = (WrapperComponent: React.ElementType) =>
  WithStatistic(({aggregation, ...rest}: IGetStatisticFilterDataProps) => {

    return (<Query
      <IPagination<any>, any>
      query={aggregation === StatisticAggregationEnum.project ? GetReceptionListQuery : GetProjectListQuery}
    >
      {
        ({data, loading}: QueryResult<any>) => {
          console.log(data);
          return (<WrapperComponent
            // items={data && data.items ? data.items : []}
            items={data && data.receptionPagination && data.receptionPagination.items ||
            data && data.projectPagination && data.projectPagination.items}
            loading={loading}
            {...rest}/>)
        }
      }
    </Query>);
  });

export default GetStatisticFilterData;
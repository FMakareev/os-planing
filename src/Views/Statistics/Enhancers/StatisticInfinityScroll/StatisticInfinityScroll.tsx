import * as React from 'react';
import {WithStatistic, IWithStatistic, StatisticAggregationEnum} from '../StatisticContext/StatisticContext';
import InfinityScrollHoc from "../../../../Enhancers/InfinityScrollHOC/InfinityScrollHOC";
import InfinityScroll from "../../../../Components/InfinityScroll/InfinityScroll";
import config from "../../../../config";

import GetProjectListQuery from './GetProjectStatisticQuery.graphql';
import GetReceptionStatisticQuery from './GetReceptionStatisticQuery.graphql';
import Preloader, {PreloaderSizeEnum, PreloaderThemeEnum} from "../../../../Components/Preloader/Preloader";
import StatisticRow from '../../Components/StatisticRow/StatisticRow';
import {IStatisticProject, IStatisticReception} from '../../../../Apollo/Types/Statistics';

interface IStatisticInfinityScrollProps extends IWithStatistic {
  [prop: string]: any
}

const InfinityScrollFactory = (props: any) => {
  const {
    query,
    queryName,
    variables,
    ...rest
  } = props;
  const InfinityScrollInst = InfinityScrollHoc(InfinityScroll)({
    query,
    queryName,
  });
  return <InfinityScrollInst
    variables={variables}
    {...rest}/>
};


const StatisticInfinityScroll: React.FC<IStatisticInfinityScrollProps> = ({
                                                                            aggregation,
                                                                            stopDate,
                                                                            startDate,
                                                                            filter
                                                                          }) => {


  if (aggregation === StatisticAggregationEnum.reception && filter) {
    const variables = {
      stopDate,
      startDate,
      project: filter,
      ...config.pagination,
    };
    return (
      <InfinityScrollFactory
        options={{
          // fetchPolicy: 'cache-and-network',
          variables
        }}
        query={GetReceptionStatisticQuery}
        queryName={'getReceptionStatistic'}
        PreloaderComponent={<Preloader
          style={{
            margin: '50px auto',
            display: 'block'
          }}
          theme={PreloaderThemeEnum.blue}
          size={PreloaderSizeEnum.md}
        />}
        ItemComponent={(props: IStatisticReception) => (<StatisticRow {...props}/>)}
      />
    );
  }
  if (aggregation === StatisticAggregationEnum.project && filter) {

    const variables = {
      stopDate,
      startDate,
      reception: filter,
      ...config.pagination,
    };
    return (
      <InfinityScrollFactory
        options={{
          // fetchPolicy: 'cache-and-network',
          variables
        }}
        query={GetProjectListQuery}
        queryName={'getProjectStatistic'}
        PreloaderComponent={<Preloader
          style={{
            margin: '50px auto',
            display: 'block'
          }}
          theme={PreloaderThemeEnum.blue}
          size={PreloaderSizeEnum.md}
        />}
        ItemComponent={(props: IStatisticProject) => (<StatisticRow {...props}/>)}
      />
    );
  }
  return null;
};

export default WithStatistic(StatisticInfinityScroll);
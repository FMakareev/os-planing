import * as React from 'react';

import ReportItemQuery from './ReportItemQuery.graphql';
import GetPrepareModelReportQuery from './GetPrepareModelReportQuery.graphql';
import {Query, QueryResult} from "react-apollo";
import {
  IGetPrepareModelReportData,
  IMonthReportItemData,
  IMonthReportItemVariables,
  IGetPrepareModelReportVariables
} from '../../../../Apollo/Types/MonthReport';
import Preloader, {PreloaderSizeEnum, PreloaderThemeEnum} from "../../../../Components/Preloader/Preloader";
import {IStoreState} from "../../../../Store/Store";
import {connect} from "react-redux";
import {IUserState} from "../../../../Store/Reducers/User/reducers";
import {match} from "react-router";


interface Params {
  /** id мероприятия, указывается при обновлении*/
  monthReportId: string;
  /** дата проведения мероприятия в формате ISOString, указывается при создании */
  date?: string;
}


interface IGetMonthReportEnhancerProps {

  match: match<Params>;
  user: IUserState;

  [prop: string]: any
}

const mapStateToProps = (state: IStoreState) => ({
  user: state.user,
});

//
const GetMonthReportEnhancer = (WrappedComponent: React.ElementType) =>
  connect(mapStateToProps, null)
  ((props: IGetMonthReportEnhancerProps) => {

    console.log('GetMonthReportEnhancer props: ', props);
    const {match:{params}, user} = props;
    console.log('GetMonthReportEnhancer params: ', params);


    if (params && params.date && user.user) {
      return (
        <Query
          <IGetPrepareModelReportData, IGetPrepareModelReportVariables>
          skip={!params.date}
          query={GetPrepareModelReportQuery}
          variables={{
            reception: user.user.reception.id,
            date: params.date
          }}
        >
          {
            ({data, loading, error}: QueryResult<IGetPrepareModelReportData, IGetPrepareModelReportVariables>) => {
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
                monthReport={data && {
                  date: params.date,
                  reception: user.user && user.user.reception,
                  ...data.getPrepareMouthReport,
                }}
                {...props}/>
            }
          }
        </Query>
      );
    }

    return (
      <Query
        <IMonthReportItemData, IMonthReportItemVariables>
        skip={params && !params.monthReportId}
        query={ReportItemQuery}
        variables={{
          id: params && params.monthReportId,
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
              monthReport={data && data.monthReportItem}
              {...props}/>
          }
        }
      </Query>
    );
  });

export default GetMonthReportEnhancer;
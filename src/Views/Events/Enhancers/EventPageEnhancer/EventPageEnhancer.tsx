import * as React from 'react';
import {match} from "react-router";
import {Query, QueryResult} from "react-apollo";

import EventItemQuery from './EventItemQuery.graphql';
import {IEventItemData, IEventItemVariables} from '../../../../Apollo/schema';
import Preloader, {PreloaderSizeEnum, PreloaderThemeEnum} from "../../../../Components/Preloader/Preloader";
import {IStoreState} from "../../../../Store/Store";
import {connect} from "react-redux";
import {IUserState} from '../../../../Store/Reducers/User/reducers';


interface Params {
  /** id мероприятия, указывается при обновлении*/
  eventId?: string;
  /** дата проведения мероприятия в формате ISOString, указывается при создании */
  date?: string;
}

interface IEventPageEnhancerProps extends match<Params> {
  user: IUserState;

  [prop: string]: any
}

const mapStateToProps = (state: IStoreState) => ({
  user: state.user,
});

const EventPageEnhancer = (WrapperComponent: React.ElementType) => {
  return connect(mapStateToProps, null)(class extends React.Component<IEventPageEnhancerProps> {

    formatData = (data?: IEventItemData) => {
      const {match: {params}, user} = this.props;

      if (data && data.eventItem) {
        return {
          ...data.eventItem,
          reception:{
            id: user.user && user.user.reception && user.user.reception.id,
            ...data.eventItem.reception,
          }
        };
      }

      if (params.date && user.user) {
        return {
          date: params.date,
          reception: user.user && user.user.reception && user.user.reception,
        }
      }
      return null;
    };


    render() {
      const {match: {params}} = this.props;
      console.log(this.props)
      console.log('EventPageEnhancer:', this.props);

      return (<Query
        <IEventItemData, IEventItemVariables>
        skip={!params.eventId}
        query={EventItemQuery}
        fetchPolicy={'no-cache'}
        variables={{
          id: params.eventId
        }}
      >
        {
          ({data, error, loading}: QueryResult<IEventItemData, IEventItemVariables>) => {
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
              return 'Error';
            }
            return (<WrapperComponent
              data={this.formatData(data)}
              {...this.props}/>)
          }
        }
      </Query>);
    }
  })
};

export default EventPageEnhancer;
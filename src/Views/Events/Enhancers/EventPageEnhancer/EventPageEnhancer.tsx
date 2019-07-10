import * as React from 'react';
import EventItemQuery from './EventItemQuery.graphql';
import {Query, QueryResult} from "react-apollo";
import {IEventItemData, IEventItemVariables} from '../../../../Apollo/schema';
import Preloader, {PreloaderSizeEnum, PreloaderThemeEnum} from "../../../../Components/Preloader/Preloader";

interface IEventPageEnhancerProps {
  [prop: string]: any
}


const EventPageEnhancer = (WrapperComponent: React.ElementType) => {
  return class extends React.Component<IEventPageEnhancerProps> {
    render() {
      const {match: {params}} = this.props;
      console.log(this.props);
      return (<Query
        <IEventItemData, IEventItemVariables>

        skip={!params.id}
        query={EventItemQuery}
        variables={{
          id: params.id
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
              data={data && data.eventItem}
              {...this.props}/>)
          }
        }
      </Query>);
    }
  }
};

export default EventPageEnhancer;
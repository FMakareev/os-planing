import * as React from 'react';
import ReceptionListQuery from './ReceptionListQuery.graphql';
import {Query, QueryResult} from "react-apollo";
import Preloader, {PreloaderSizeEnum, PreloaderTypeEnum} from "../../../../Components/Preloader/Preloader";

interface IReceptionListProps {
  [prop: string]: any
}

const ReceptionListHOC = (WrapperComponent: React.ElementType) => {
  return class extends React.Component<IReceptionListProps> {

    render() {

      return (
        <Query
          fetchPolicy={'cache-first'}
          variables={{
            limit: 50,
            page: 1,
          }}
          query={ReceptionListQuery}>
          {({loading, error, data, fetchMore}: QueryResult) => {
            if (loading) {
              return (<Preloader type={PreloaderTypeEnum.block} size={PreloaderSizeEnum.md}/>)
            }

            return (<WrapperComponent
              items={data.receptionPagination.items}
            />)
          }}
        </Query>
      );
    }
  }
};

export default ReceptionListHOC;
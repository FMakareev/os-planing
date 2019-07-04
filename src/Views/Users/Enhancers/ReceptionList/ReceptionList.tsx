import * as React from 'react';
import ReceptionListQuery from './ReceptionListQuery.graphql';
import {Query, QueryResult} from "react-apollo";

interface IReceptionListProps {
  [prop: string]: any
}

const ReceptionList: React.FC<IReceptionListProps> = () => {
  return (
    <div>
      <Query
        variables={{
          limit: 50,
          page: 1,
        }}
        query={ReceptionListQuery}>
        {({loading, error, data, fetchMore}: QueryResult) => {
          console.log(loading, error, data, fetchMore);
          return null;
        }}
      </Query>
    </div>
  );
};

export default ReceptionList;
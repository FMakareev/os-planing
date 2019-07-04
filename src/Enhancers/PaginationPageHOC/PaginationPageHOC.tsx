import * as React from 'react';

/**View */
import {Query, QueryResult} from 'react-apollo';


interface IPaginationPageHOCProps {
  queryName: string;
  limit: number;
  page: number;
  query: any;
  queryVariables: any;
  [prop: string]: any;
}

interface IPaginationPageHOCState {
  limit: number;
  page: number;
}


export class PaginationPageHOC extends React.Component<IPaginationPageHOCProps, IPaginationPageHOCState> {

  static defaultProps = {
    limit: 10,
    page: 1,
    fetchPolicy: "cache-first",
  };

  constructor(props: IPaginationPageHOCProps) {
    super(props);
    this.state = this.initialState;
  }

  get initialState() {
    const {page, limit} = this.props;
    return {
      page,
      limit,
    };
  }

  reFetchAfterSetState = (fetchMore: any) => () => {
    const {limit, page} = this.state;
    const {queryName, query, fetchPolicy, queryVariables} = this.props;
    fetchMore({
      fetchPolicy,
      query: query,
      variables: {
        ...queryVariables,
        limit: limit,
        page: page,
      },
      updateQuery: (previousResult: any, {fetchMoreResult}: any) => {
        if (!fetchMoreResult) return {[queryName]: []};
        return fetchMoreResult;
      },
    });
  };

  prevPage = (fetchMore: any) => {
    const {page} = this.state;
    try {
      if (page >= 1) {
        this.setState(
          state => ({
            ...state,
            page: page - 1,
          }),
          this.reFetchAfterSetState(fetchMore),
        );
      }
    } catch (error) {
      console.error('Error prevPage: ', error);
    }
  };

  nextPage = (fetchMore: any) => {
    const {page} = this.state;
    try {
      this.setState(
        state => ({
          ...state,
          page: page + 1,
        }),
        this.reFetchAfterSetState(fetchMore),
      );
    } catch (error) {
      console.error('Error nextPage:', error);
    }
  };

  render() {
    const {query, queryVariables, fetchPolicy, queryName} = this.props;
    const {page, limit} = this.state;
    return (
      <Query
        fetchPolicy={fetchPolicy}
        skip={!query}
        variables={{
          ...queryVariables,
          limit: limit,
          page: page,
        }}
        query={query}>
        {({loading, error, data, fetchMore}: QueryResult) => {
          const Children: any = this.props.children;
          return (
            <Children
              data={data}
              loading={loading}
              error={error}
              pagination={{
                limit: limit,
                page: page,
                nextPage: () => {
                  this.nextPage(fetchMore);
                },
                disabledToNextPage:
                  loading ||
                  (data[queryName] && data[queryName].length === 0) ||
                  (data[queryName] && data[queryName].length < limit),
                prevPage: () => {
                  this.prevPage(fetchMore);
                },
                disabledToPrevPage: page - 1 < 1,
              }}
            />
          );
        }}
      </Query>
    );
  }
}

export default PaginationPageHOC;

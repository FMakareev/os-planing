import * as React from 'react';
import {DataProps, graphql, OperationOption} from 'react-apollo';
import {IPagination} from "../../Apollo/schema";


interface IInfinityScrollHocOptions<TData = any> {
  query: any;
  queryName: string;
  variables?: IInfinityScrollHocVariables
  operationOption?: OperationOption<any, IPagination<TData>, IInfinityScrollHocVariables>
}

interface IInfinityScrollHocVariables {
  limit: number;
  page: number;
  [prop: string]: any
}

interface IInfinityScrollHocProps extends DataProps<any, IInfinityScrollHocVariables> {
  limit?: number;
  page?: number;

  [prop: string]: any
}

interface IInfinityScrollHocState extends IInfinityScrollHocVariables {
  [prop: string]: any
}


const InfinityScrollHoc = <TData extends any>(WrapperComponent: React.ElementType) =>
  ({query, queryName, operationOption, variables}: IInfinityScrollHocOptions) => {
    return graphql<any, IPagination<TData>, IInfinityScrollHocVariables>(query, {
      ...operationOption,
      options: {
        variables: {
          page: 1,
          limit: 10,
          ...variables,
        }
      }
    })(class extends React.Component<IInfinityScrollHocProps, IInfinityScrollHocState> {

      constructor(props: IInfinityScrollHocProps) {
        super(props);
        this.state = this.initialState;
      }

      get initialState() {
        return {
          page: 1,
          limit: 10,
          ...variables,
        }
      }


      componentDidUpdate(prevProps: IInfinityScrollHocProps, prevState: IInfinityScrollHocState) {
        const {data} = this.props;
        if (!data.loading && !data.error) {
          this.onComplete();
        }

      }

      onFetchMore = () => {
        const {limit, page} = this.state;
        const {data} = this.props;
        data.fetchMore && data.fetchMore({
          variables: {
            limit: limit,
            page: page,
          },
          updateQuery: (previousResult: any, {fetchMoreResult}: any) => {
            if (!fetchMoreResult) return previousResult;
            return {
              [queryName]: {
                count: fetchMoreResult.receptionPagination.count,
                items: [
                  ...previousResult[queryName].items,
                  ...fetchMoreResult[queryName].items
                ],
                pageInfo: fetchMoreResult[queryName].pageInfo,
                __typename: fetchMoreResult[queryName].__typename,
              },
            }
          },
        });
      };

      getNextItems = () => {
        this.setState((state: IInfinityScrollHocState) => ({
          page: typeof state.page === 'number' ? state.page + 1 : 1,
        }), this.onFetchMore)
      };


      /** @desc вызывается после того как получена новая порция данных */
      onComplete = () => {
        this.props.onComplete && this.props.onComplete()
      };

      render() {
        const {data} = this.props;
        console.log('InfinityScrollHoc: ', data);

        return (<WrapperComponent
          getNextItems={this.getNextItems}

          {...this.props}
          {...data}

          data={data[queryName]}
        />)
      }
    })
  }


export default InfinityScrollHoc
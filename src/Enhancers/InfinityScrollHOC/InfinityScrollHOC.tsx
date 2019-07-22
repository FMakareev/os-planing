import * as React from 'react';
import {DataProps, graphql, OperationOption} from 'react-apollo';
import {IPagination} from "../../Apollo/schema";


interface IInfinityScrollHocOptions<TData = any> {
  query: any;
  queryName: string;
  variables?: IInfinityScrollHocVariables
  operationOption?: OperationOption<any, IPagination<TData>, IInfinityScrollHocVariables>
}

export interface IInfinityScrollHocVariables {
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
      options: (props: any) => {
        return ({
          variables: {
            page: 1,
            limit: 10,
          },
          ...props.options,
        })
      },
      // @ts-ignore
    })(class extends React.Component<IInfinityScrollHocProps, IInfinityScrollHocState> {

      constructor(props: IInfinityScrollHocProps) {
        super(props);
        this.state = this.initialState;
      }

      get initialState() {
        return {
          page: 1,
          limit: 10,
          ...(this.props.options && this.props.options.variables ? {
            ...this.props.options.variables,
          } : {}),

        }
      }


      componentDidMount() {
        // const {data: {refetch, subscribeToMore}, options} = this.props;
        //
        // subscribeToMore({
        //   document: query,
        //   variables: {
        //     ...(options && options.variables ? {
        //       ...options.variables,
        //     } : {}),
        //   },
        //   updateQuery: (previousResult: any, {fetchMoreResult}: any) => {
        //     console.log('updateQuery: ', previousResult, fetchMoreResult);
        //   },
        // });
      }

      onFetchMore = () => {
        const {data} = this.props;
        data.fetchMore && data.fetchMore({
          variables: {
            ...this.state,
          },
          updateQuery: (previousResult: any, {fetchMoreResult}: any) => {
            if (!fetchMoreResult) return previousResult;
            return {
              [queryName]: {
                count: fetchMoreResult[queryName].count,
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
        this.setState((state: IInfinityScrollHocState) => {
          const {data} = this.props;
          if (data && data[queryName]) {
            if(data[queryName].pageInfo.prevPage === 1 && data[queryName].pageInfo.nextPage === 2){
              return ({
                page: 2,
              })
            } else {
              return ({
                page: typeof state.page === 'number' ? state.page + 1 : 1,
              })
            }
          } else {
            return ({
              page: typeof state.page === 'number' ? state.page + 1 : 1,
            })
          }
        }, () => {
          this.props.onChange && this.props.onChange(this.state);
          this.onFetchMore()
        })
      };


      render() {
        const {data} = this.props;
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
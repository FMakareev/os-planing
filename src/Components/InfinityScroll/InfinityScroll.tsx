import * as React from 'react';

import InfiniteScroll from "react-infinite-scroll-component";
import {IPagination} from '../../Apollo/schema';
import {DataValue} from "react-apollo";


interface IInfinityScrollProps extends DataValue<any, any> {
  data: IPagination;
  ItemComponent: any;
  PreloaderComponent: any;

  [prop: string]: any
}

const InfinityScroll: React.FC<IInfinityScrollProps> = ({getNextItems, data, ItemComponent, PreloaderComponent, loading, ...rest}) => {
  console.log(data);
  console.log(loading);
  // const hasMore = !data ? loading ? true : false ? data.items && (data.items.length < data.count): false
  const hasMore = !data && loading ? true : (data && data.items) ? !(data.items.length === 0 && !loading) : data.items.length < data.count ;

  console.log(hasMore);
  return (
    <InfiniteScroll
      dataLength={data && data.items && data.items.length}
      next={getNextItems}
      hasMore={hasMore}
      loader={PreloaderComponent}
    >
      {
        data && data.items && data.items.map((item: any, index: number) => (
          <ItemComponent {...item} key={index}/>
        ))
      }

    </InfiniteScroll>
  );
};

export default InfinityScroll;
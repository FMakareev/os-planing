import * as React from 'react';
import PrivacyBlockListQuery from './PrivacyBlockListQuery.graphql';
import {Query, QueryResult} from "react-apollo";
import Preloader, {PreloaderSizeEnum, PreloaderThemeEnum} from "../../../../Components/Preloader/Preloader";
import {IPrivacyBlock, IPrivacyBlockList} from "../../../../Apollo/schema";


const PrivacyBlockListEnhancer = (WrapperComponent: React.ElementType) => (props: any) => {
  return (<Query
    <IPrivacyBlockList, any>
    query={PrivacyBlockListQuery}
  >
    {
      ({data, loading, error}: QueryResult<IPrivacyBlockList, any>) => {

        if (loading) {
          return (<Preloader
            style={{
              margin: '16px auto',
              display: 'block'
            }}
            theme={PreloaderThemeEnum.blue}
            size={PreloaderSizeEnum.md}
          />)
        }

        if (error) {
          return 'Error';
        }
        return (<WrapperComponent
          privacyBlockList={data && data.privacyBlockList.sort((a: IPrivacyBlock,b: IPrivacyBlock)=>{
            return a.index - b.index;
          })}
          {...props}
        />);
      }
    }
  </Query>);
};

export default PrivacyBlockListEnhancer;
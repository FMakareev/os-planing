import * as React from 'react';
import {Query} from 'react-apollo';
import SettingsItemQuery from './SettingsItemQuery.graphql';
import Preloader, {PreloaderSizeEnum, PreloaderTypeEnum} from "../../../../Components/Preloader/Preloader";

interface IGetSmtpSettingProps {
  [prop: string]: any
}


const GetSmtpSetting = (WrapperComponent: React.ElementType): React.FC<IGetSmtpSettingProps> => (props) => {
  return (
    <Query query={SettingsItemQuery}>
      {
        ({loading, error, data}: any) => {
          console.log('GetSmtpSetting: ', loading, data);

          if (loading) {
            return (<Preloader type={PreloaderTypeEnum.block} size={PreloaderSizeEnum.md}/>)
          }
          return <WrapperComponent {...data}/>
        }
      }
    </Query>
  );
};

export default GetSmtpSetting;
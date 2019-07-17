import * as React from 'react';
import {graphql, compose} from "react-apollo";
import GetNotReadCountNotificationQuery from './GetNotReadCountNotificationQuery.graphql';

interface IReadAllMessageProps {
  [prop: string]: any
}

const enhance = compose(graphql(GetNotReadCountNotificationQuery, {
  options:{
    fetchPolicy: 'no-cache',
    pollInterval: 60000
  }
}));


const GetNotReadCountNotification = (WrapperComponent: React.ElementType) => {
  return enhance(class extends React.Component<IReadAllMessageProps> {



    render() {
      const {data} = this.props;
      return (<WrapperComponent
        count={data.getNotReadCount && data.getNotReadCount.notReadCount > 0 ? data.getNotReadCount.notReadCount: null}
        {...this.props}/>);
    }
  })
};

export default GetNotReadCountNotification;
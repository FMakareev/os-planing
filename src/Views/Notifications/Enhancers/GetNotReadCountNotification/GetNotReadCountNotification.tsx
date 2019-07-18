import * as React from 'react';
import {compose, Query} from "react-apollo";
import GetNotReadCountNotificationQuery from './GetNotReadCountNotificationQuery.graphql';
import {IStoreState} from "../../../../Store/Store";
import {connect} from "react-redux";
import {IUserState} from "../../../../Store/Reducers/User/reducers";

interface IReadAllMessageProps {
  user: IUserState;
  [prop: string]: any
}

const mapStateToProps = (state: IStoreState) => ({
  user: state.user,
});
const enhance = compose(connect(mapStateToProps, null));


const GetNotReadCountNotification = (WrapperComponent: React.ElementType) => (options?: any)=>{
  return enhance(class extends React.Component<IReadAllMessageProps> {


    render() {
      const {user} = this.props;
      return (<Query
        skip={!(user && user.user)}
        query={GetNotReadCountNotificationQuery}
        pollInterval={60000}
        fetchPolicy={'no-cache'}
        {...options}
        variables={{
          user: user && user.user && user.user.id
        }}
      >
        {
          ({data,}: any) => {
            return <WrapperComponent
              count={data && data.getNotReadCount && data.getNotReadCount.notReadCount > 0 ? data.getNotReadCount.notReadCount : null}
              {...this.props}
            />
          }
        }
      </Query>);
    }
  })
};

export default GetNotReadCountNotification;
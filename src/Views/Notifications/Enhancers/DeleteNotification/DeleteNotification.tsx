import * as React from 'react';
import {graphql, compose} from 'react-apollo';
import {connect} from "react-redux";

import DeleteNotificationMutation from './DeleteNotificationMutation.graphql';
import {IStoreState} from "../../../../Store/Store";
import RefetchNotificationQueries from '../RefetchNotificationQueries/RefetchNotificationQueries';
import config from "../../../../config";

import GetNotReadCountNotificationQuery from '../GetNotReadCountNotification/GetNotReadCountNotificationQuery.graphql';

interface IDeleteNotificationProps {
  [prop: string]: any
}

const mapStateToProps = (state: IStoreState) => ({
  user: state.user,
});


const enhancer = compose(
  graphql<any, any, any>(DeleteNotificationMutation),
  connect(mapStateToProps)
);


const DeleteNotification = (WrapperComponent: React.ElementType) => {
  return enhancer(class extends React.Component<IDeleteNotificationProps> {

    onDelete = async (_: any, onClose: any) => {
      const {user, mutate} = this.props;

      await mutate({
        variables: {
          user: user && user.user.id,
        },
        refetchQueries: [
          RefetchNotificationQueries({
            ...config.pagination,
            user: user && user.user.id,
          }),
          {
            query: GetNotReadCountNotificationQuery,
            variables:{
              user: user && user.user.id,
            },
          }
        ]
      });

      onClose && onClose();

    };

    render() {
      return (<WrapperComponent
        onDelete={this.onDelete}
        buttonLabel={'Удалить все уведомления'}
        {...this.props}/>);
    }
  })
};

export default DeleteNotification;
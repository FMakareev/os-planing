import * as React from 'react';
import {graphql, MutateProps} from "react-apollo";

import ChangeUserPassword from './ChangeUserPassword.graphql';
import {IUserChangePassword, IUserChangePasswordVariables} from "../../../../Apollo/schema";
import {connect} from "react-redux";
import {IStoreState} from "../../../../Store/Store";
import {IUserState} from "../../../../Store/Reducers/User/reducers";
import {RouteComponentProps, withRouter} from "react-router";
import Logging from "../../../../Helpers/Logging";
import {ApolloError} from 'apollo-boost';
import {FORM_ERROR} from "final-form";
import {GetMessageByTranslateKey} from "../../../../Shared/TranslateDict";

interface IChangeUserPasswordHocProps extends MutateProps, RouteComponentProps {
  user: IUserState;

  [prop: string]: any
}

const mapStateToProps = (state: IStoreState) => ({
  user: state.user,
});

const ChangeUserPasswordHoc = (WrapperComponent: React.ElementType) => {
  return graphql<any, IUserChangePassword, IUserChangePasswordVariables>(ChangeUserPassword)(
    connect(mapStateToProps, null)(
      withRouter(class extends React.Component<IChangeUserPasswordHocProps, any> {

        onSubmit = async (values: IUserChangePasswordVariables) => {
          // TODO: добавить проверку на ошибки в ответе после того как бек пофиксит логику
          console.log('values: ', values);
          const {message, data, ...rest}: any = await this.props.mutate({
            variables: values,
          }).catch((error: ApolloError) => {
            Logging(error.message, 'error');
            return JSON.parse(JSON.stringify(error));
          });

          console.log(data, rest, message);
          if (message) {
            return {
              [FORM_ERROR]: GetMessageByTranslateKey(message),
            }
          }
          this.props.history.push('/profile-settings')
        };

        render() {
          const {user} = this.props;
          return (<WrapperComponent
            initialValues={{
              id: user.user && user.user.id,
            }}
            onSubmit={this.onSubmit}
            {...this.props}
          />)
        }
      })))
};


export default ChangeUserPasswordHoc;
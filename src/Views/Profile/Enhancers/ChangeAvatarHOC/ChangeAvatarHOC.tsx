import * as React from 'react';
import FileUpload from "../../../../Enhancers/FileUpload/FileUpload";
import ChangeAvatarMutation from './ChangeAvatarMutation.graphql';
import {MutateProps, graphql} from "react-apollo";
import {IUpdateUserDataVariables, IUpdateUserData, IUser} from "../../../../Apollo/schema";
import {IResponseUploadFile} from "../../../Users/Enhancers/CreateReception/CreateReception";
import {FORM_ERROR, FormApi} from "final-form";
import {GetMessageByTranslateKey} from "../../../../Shared/TranslateDict";
import {connect} from "react-redux";
import {IStoreState} from "../../../../Store/Store";
import {IUserState} from "../../../../Store/Reducers/User/reducers";
import {AddUser} from '../../../../Store/Reducers/User/actionCreators';
import {Dispatch} from "redux";
import Logging from "../../../../Helpers/Logging";
import {ApolloError} from 'apollo-boost';

interface IChangeAvatarHOCProps extends MutateProps {
  uploadFile(file: any): Promise<any>;

  user: IUserState;

  updateUser(user: IUser): any;

  [prop: string]: any
}

const mapStateToProps = (state: IStoreState) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateUser: (user: IUser) => dispatch(AddUser(user)),
});

const ChangeAvatarHOC = (WrapperComponent: React.ElementType) => {
  return graphql<any, IUpdateUserData, IUpdateUserDataVariables>(ChangeAvatarMutation)(
    connect(mapStateToProps, mapDispatchToProps)(
      FileUpload(class extends React.Component<IChangeAvatarHOCProps> {

        onSubmit = async (values: any, form: FormApi<any>) => {

          const {user, mutate, uploadFile} = this.props;

          const fileResult: IResponseUploadFile = await uploadFile(values.avatar && values.avatar.file);
          if (fileResult.message && fileResult.message !== "upload success") {
            return {
              [FORM_ERROR]: GetMessageByTranslateKey(fileResult.message),
            }
          }

          const {graphQLErrors, networkErrors, message, data} = await mutate({
            variables: {
              id: user.user && user.user.id,
              avatar: fileResult.file_data.id,
            }
          })
            .catch((error: ApolloError) => {
              Logging(error.message, 'error');
              return JSON.parse(JSON.stringify(error));
            });

          if (!data && (graphQLErrors || networkErrors || message)) {
            return {
              [FORM_ERROR]: GetMessageByTranslateKey(message),
            }
          }
          if (data) {
            this.props.updateUser(data.updateUser.user);
            setTimeout(form.reset, 500);
          }
        };

        render() {
          const {user, result} = this.props;

          return (<WrapperComponent
            onSubmit={this.onSubmit}
            initialValues={user.user}
            {...result}
            {...this.props}
          />)
        }

      })))
};

export default ChangeAvatarHOC;
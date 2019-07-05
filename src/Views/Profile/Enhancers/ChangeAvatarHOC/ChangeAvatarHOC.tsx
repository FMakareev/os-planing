import * as React from 'react';
import FileUpload from "../FileUpload/FileUpload";
import ChangeAvatarMutation from './ChangeAvatarMutation.graphql';
import {MutateProps, graphql} from "react-apollo";
import {IUpdateUserDataVariables, IUpdateUserData} from "../../../../Apollo/schema";
import {IResponseUploadFile} from "../../../Users/Enhancers/CreateReception/CreateReception";
import {FORM_ERROR} from "final-form";
import {GetMessageByTranslateKey} from "../../../../Shared/TranslateDict";
import {connect} from "react-redux";
import {IStoreState} from "../../../../Store/Store";
import {IUserState} from "../../../../Store/Reducers/User/reducers";

interface IChangeAvatarHOCProps extends MutateProps {
  uploadFile(file: any): Promise<any>;

  user: IUserState;

  [prop: string]: any
}

const mapStateToProps = (state: IStoreState) => ({
  user: state.user,
});

const ChangeAvatarHOC = (WrapperComponent: React.ElementType) => {
  return graphql<any, IUpdateUserData, IUpdateUserDataVariables>(ChangeAvatarMutation)(
    connect(mapStateToProps, null)(
      FileUpload(class extends React.Component<IChangeAvatarHOCProps> {

        onSubmit = async (values: any) => {

          const {user, mutate, uploadFile} = this.props;

          const fileResult: IResponseUploadFile = await uploadFile(values.avatar && values.avatar.file);
          console.log(fileResult);
          if (fileResult.message && fileResult.message !== "upload success") {
            return {
              [FORM_ERROR]: GetMessageByTranslateKey(fileResult.message),
            }
          }

          const updateResult = await mutate({
            variables: {
              id: user.user && user.user.id,
              avatar: fileResult.file_data.id,
            }
          });

          console.log(updateResult);

        };

        render() {
          const {user, result} = this.props;
          console.log(this.props);
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
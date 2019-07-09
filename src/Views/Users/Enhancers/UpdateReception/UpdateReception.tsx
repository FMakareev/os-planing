import * as React from 'react';
import {FORM_ERROR, FormApi} from "final-form";
import {ApolloError} from 'apollo-boost';
import {graphql, MutateProps, MutationResult} from "react-apollo";
import {compose} from "redux";

import UpdateReceptionMutation from './UpdateReceptionMutation.graphql';
import {FormCreateUserState} from "../../Components/FormCreateUser/FormCreateUser";
import RefetchReceptionListQueries from "../RefetchReceptionListQueries/RefetchReceptionListQueries";
import Logging from "../../../../Helpers/Logging";

import {GetMessageByTranslateKey} from "../../../../Shared/TranslateDict";

import {IUpdateReceptionData} from "../../../../Apollo/schema";
import {IResponseUploadFile} from '../CreateReception/CreateReception';
import FileUpload, {IFileUpload} from "../../../../Enhancers/FileUpload/FileUpload";
import {paginationConfig} from "../../Views/Users/paginationConfig";

interface IUpdateReceptionProps extends MutateProps, IFileUpload {
  UpdateReception: any;
  UpdateReceptionResult: MutationResult;
  [prop: string]: any
}

const enhance = compose(
  FileUpload,
  graphql<any, IUpdateReceptionData>(UpdateReceptionMutation, {
    name: 'UpdateReception',
  })
);


const UpdateReception = (WrapperComponent: React.ElementType) => {
  return enhance(
    class extends React.Component<IUpdateReceptionProps> {

      onSubmit = async (values: FormCreateUserState, form: FormApi<FormCreateUserState>) => {
        const {UpdateReception, uploadFile} = this.props;
        const variables = {
          id: values.id,
          city: values.city,
          user: {
            email: values.email,
            password: values.password,
            avatar: values.avatar && values.avatar.id,
            fullName: values.fullName
          }
        };

        if (values.avatar && !values.avatar.id) {
          const file: IResponseUploadFile = await uploadFile(values.avatar && values.avatar.file);
          if (file.message !== "upload success") {
            return {
              [FORM_ERROR]: GetMessageByTranslateKey(file.statusText),
            }
          } else {
            variables.user.avatar = file.file_data.id;
          }
        }

        const {message}: any = await UpdateReception({
          variables,
          refetchQueries: [RefetchReceptionListQueries()]
        })
          .catch((error: ApolloError) => {
            Logging(error.message, 'error');
            return JSON.parse(JSON.stringify(error));
          });
        if (message) {
          return {
            [FORM_ERROR]: GetMessageByTranslateKey(message),
          }
        } else {
          form.reset();
          this.props.onClose && this.props.onClose();
        }

      };

      render() {
        const {UpdateReceptionResult, uploadFileLoading, ...rest} = this.props;
        return (<WrapperComponent
          {...this.props}
          loading={UpdateReceptionResult.loading || uploadFileLoading}
          onSubmit={this.onSubmit}
        />)
      }
    })
};

export default UpdateReception;
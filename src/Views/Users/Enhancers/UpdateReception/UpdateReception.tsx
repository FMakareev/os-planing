import * as React from 'react';
import {FORM_ERROR, FormApi} from "final-form";
import {ApolloError} from 'apollo-boost';
import {compose, graphql, MutateProps, MutationResult} from "react-apollo";

import UpdateReceptionMutation from './UpdateReceptionMutation.graphql';
import {FormCreateUserState} from "../../Components/FormCreateUser/FormCreateUser";
import RefetchReceptionListQueries from "../RefetchReceptionListQueries/RefetchReceptionListQueries";
import Logging from "../../../../Helpers/Logging";

import {GetMessageByTranslateKey} from "../../../../Shared/TranslateDict";

import {IUpdateReceptionData} from "../../../../Apollo/schema";
import {IResponseUploadFile} from '../CreateReception/CreateReception';
import FileUpload, {IFileUpload} from "../../../../Enhancers/FileUpload/FileUpload";

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

        const {message, graphQLErrors}: any = await UpdateReception({
          variables,
          refetchQueries: [RefetchReceptionListQueries()]
        })
          .catch((error: ApolloError) => {
            Logging(error.message, 'error');
            return JSON.parse(JSON.stringify(error));
          });
        if (message) {

          const errors: any = {
            // [FORM_ERROR]: GetMessageByTranslateKey(message),
          };

          graphQLErrors.forEach((item: any) => {
            if (item.message === "GraphQL error: email already exist") {
              errors['email'] = 'Email занят';
            }
          });

          return errors
        } else {
          setTimeout(form.reset, 500);
          this.props.onClose && this.props.onClose();
        }

      };

      render() {
        const {UpdateReceptionResult, uploadFileLoading} = this.props;
        return (<WrapperComponent
          {...this.props}
          loading={UpdateReceptionResult.loading || uploadFileLoading}
          onSubmit={this.onSubmit}
        />)
      }
    })
};

export default UpdateReception;
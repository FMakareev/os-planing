import * as React from 'react';
import {compose, graphql, MutateProps} from 'react-apollo'

import CreateUserMutation from './CreateUserMutation.graphql';
import {ICreateReceptionData} from '../../../../Apollo/schema';
import {FormCreateUserState} from "../../Components/FormCreateUser/FormCreateUser";
import {ApolloError} from 'apollo-boost';
import Logging from "../../../../Helpers/Logging";
import {FORM_ERROR, FormApi} from "final-form";
import {GetMessageByTranslateKey} from "../../../../Shared/TranslateDict";
import RefetchReceptionListQueries from "../RefetchReceptionListQueries/RefetchReceptionListQueries";
import FileUpload, {IFileUpload} from "../../../../Enhancers/FileUpload/FileUpload";

interface ICreateUserProps extends MutateProps<ICreateReceptionData, any>, IFileUpload {
  [prop: string]: any
}

export interface IResponseUploadFile extends Response {
  errors: {
    sys: string[];
    write: string[];
    network: string[];
  },
  message: string;
  file_data: {
    id: string;
    name: string;
    sha256: string;
    ext: string;
    mime: string;
    size: string;
    url: string;
    provider: string;
  };

  [prop: string]: any;
}


const enhance = (WrapperComponent: React.ElementType) => compose(
  graphql<ICreateReceptionData, any>(CreateUserMutation),
  FileUpload,
)(WrapperComponent);


const CreateReception: any = (WrapperComponent: any) => {
  return enhance(class extends React.Component<ICreateUserProps> {

    onSubmit = async (values: FormCreateUserState, form: FormApi<FormCreateUserState>) => {
      const {uploadFile, mutate, onClose} = this.props;
      let file: IResponseUploadFile | null = null;
      if (typeof values.avatar === 'object' && values.avatar.file) {
        file = await uploadFile(typeof values.avatar === 'object' && values.avatar.file);
      }


      let variables = {
        city: values.city,
        user: {
          email: values.email,
          password: values.password,
          avatar: file && file.file_data && file.file_data.id,
          fullName: values.fullName
        }
      }

      const {message, graphQLErrors, ...rest}: any = await mutate({
        variables,
        refetchQueries: [RefetchReceptionListQueries()]
      })
        .catch((error: ApolloError) => {
          Logging(error.message, 'error');
          return JSON.parse(JSON.stringify(error));
        });

      if (message) {
        const errors: any = {
          [FORM_ERROR]: GetMessageByTranslateKey(message),
        };

        graphQLErrors.forEach((item: any) => {
          if (item.message === "GraphQL error: email already exist") {
            errors['email'] = 'Email занят';
          }
        });

        return errors
      } else {
        setTimeout(form.reset, 500);
        onClose && onClose();
      }

      if (!file) {
        return null;
      }
      return {
        [FORM_ERROR]: file && GetMessageByTranslateKey(file.statusText),
      }
    };

    render() {
      const {result, uploadFileLoading} = this.props;
      return <WrapperComponent
        {...this.props}
        loading={result.loading || uploadFileLoading}
        onSubmit={this.onSubmit}
      />
    }

  })
};

export default CreateReception;
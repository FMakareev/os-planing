import * as React from 'react';
import {graphql, MutateProps} from 'react-apollo'

import CreateUserMutation from './CreateUserMutation.graphql';
import {ICreateReceptionData} from '../../../../Apollo/schema';
import {FormCreateUserState} from "../../Components/FormCreateUser/FormCreateUser";
import {ApolloError} from 'apollo-boost';
import Logging from "../../../../Helpers/Logging";
import {FORM_ERROR, FormApi} from "final-form";
import {GetMessageByTranslateKey} from "../../../../Shared/TranslateDict";
import RefetchReceptionListQueries from "../RefetchReceptionListQueries/RefetchReceptionListQueries";
import FileUpload, {IFileUpload} from "../../../../Enhancers/FileUpload/FileUpload";
import {compose} from 'recompose';

interface ICreateUserProps extends MutateProps, IFileUpload {
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


const enhance = compose(
  FileUpload,
  graphql<any, ICreateReceptionData>(CreateUserMutation));


const CreateReception: any = (WrapperComponent: any) => {
  return enhance(class extends React.Component<ICreateUserProps | any> {

    onSubmit = async (values: FormCreateUserState, form: FormApi<FormCreateUserState>) => {
      const {uploadFile,mutate,onClose} = this.props;
      const file: IResponseUploadFile = await uploadFile(typeof values.avatar === 'object' && values.avatar.file);

      if (file.message === "upload success") {
        const {message}: any = await mutate({
            variables: {
              city: values.city,
              user: {
                email: values.email,
                password: values.password,
                avatar: file.file_data.id,
                fullName: values.fullName
              }
            },
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
          setTimeout(form.reset, 500);
          onClose && onClose();
        }
      }

      return {
        [FORM_ERROR]: GetMessageByTranslateKey(file.statusText),
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
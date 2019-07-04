import * as React from 'react';
import {graphql, MutateProps} from 'react-apollo'

import CreateUserMutation from './CreateUserMutation.graphql';
import {IReceptionData} from '../../../../Apollo/schema';
import {FormCreateUserState} from "../../Components/FormCreateUser/FormCreateUser";
import {ApolloError} from 'apollo-boost';
import Logging from "../../../../Helpers/Logging";
import {FORM_ERROR} from "final-form";
import {GetMessageByTranslateKey} from "../../../../Shared/TranslateDict";
import RefetchReceptionListQueries from "../RefetchReceptionListQueries/RefetchReceptionListQueries";

interface ICreateUserProps extends MutateProps {
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

const CreateReception: any = (WrapperComponent: any) => {
  return graphql<any, IReceptionData>(CreateUserMutation)(
    class extends React.Component<ICreateUserProps | any> {


      uploadFile = (file: any): Promise<IResponseUploadFile> => {

        const formData = new FormData();

        formData.append('file', file);

        return fetch(`/uploader`,
          {
            credentials: 'include',
            method: 'POST',
            body: formData
          })
          .then((response: Response): any => {
            if (response.status >= 200 && response.status < 300) {
              return response.json();
            } else {
              throw response;
            }
          })
          .then((response: IResponseUploadFile): any => {
            console.log('response: ', response);
            if (response.message === "upload success") {
              return response;
            } else {
              throw response;
            }
          })
          .catch((error: any) => {
            console.log(error);
            Logging(error.statusText, 'error');
            return error;
          })
      };

      onSubmit = async (values: FormCreateUserState) => {

        const file: IResponseUploadFile = await this.uploadFile(typeof values.avatar === 'object' && values.avatar.file);

        if (file.message === "upload success") {
          const {message}: any = await this.props
            .mutate({
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
            this.props.onClose && this.props.onClose();
          }

        }

        return {
          [FORM_ERROR]: GetMessageByTranslateKey(file.statusText),
        }
      };

      render() {
        return <WrapperComponent
          {...this.props}
          onSubmit={this.onSubmit}
        />
      }

    })
};

export default CreateReception;
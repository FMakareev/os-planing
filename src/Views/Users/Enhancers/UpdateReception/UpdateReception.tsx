import * as React from 'react';
import {FORM_ERROR} from "final-form";
import {ApolloError} from 'apollo-boost';
import {graphql, MutateProps} from "react-apollo";

import UpdateReceptionMutation from './UpdateReceptionMutation.graphql';
import {FormCreateUserState} from "../../Components/FormCreateUser/FormCreateUser";
import RefetchReceptionListQueries from "../RefetchReceptionListQueries/RefetchReceptionListQueries";
import Logging from "../../../../Helpers/Logging";

import {GetMessageByTranslateKey} from "../../../../Shared/TranslateDict";

import {IReceptionData} from "../../../../Apollo/schema";
import {IResponseUploadFile} from '../CreateReception/CreateReception';

interface IUpdateReceptionProps extends MutateProps {
  [prop: string]: any
}

const UpdateReception = (WrapperComponent: React.ElementType) => {
  return graphql<any, IReceptionData>(UpdateReceptionMutation)(
    class extends React.Component<IUpdateReceptionProps> {

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
        console.log(values);
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
          const file: IResponseUploadFile = await this.uploadFile(values.avatar && values.avatar.file);
          if (file.message !== "upload success") {
            return {
              [FORM_ERROR]: GetMessageByTranslateKey(file.statusText),
            }
          } else {
            variables.user.avatar = file.file_data.id;
          }
        }

        const {message}: any = await this.props
          .mutate({
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
          this.props.onClose && this.props.onClose();
        }

      };

      render() {
        console.log(this.props);
        return (<WrapperComponent
          {...this.props}
          onSubmit={this.onSubmit}
        />)
      }
    })
};

export default UpdateReception;
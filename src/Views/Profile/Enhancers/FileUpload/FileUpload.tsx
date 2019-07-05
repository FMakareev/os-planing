import * as React from 'react';
import Logging from "../../../../Helpers/Logging";
import {IResponseUploadFile} from "../../../Users/Enhancers/CreateReception/CreateReception";

export interface IFileUploadProps {
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

// TODO: Добавить состояния loading, error в пропсы
const FileUpload = (WrapperComponent: React.ElementType) => {
  return class extends React.Component<IFileUploadProps> {


    uploadFile = <PromiseResponse extends any | IResponseUploadFile>(file: any): Promise<PromiseResponse> => {
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
          if (response.message === "upload success") {
            return response;
          } else {
            throw response;
          }
        })
        .catch((error: any) => {
          Logging(error.statusText, 'error');
          return error;
        })
    };

    render() {
      return (<WrapperComponent uploadFile={this.uploadFile} {...this.props}/>)
    }
  }
};

export default FileUpload;
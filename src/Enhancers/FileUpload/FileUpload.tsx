import * as React from 'react';
import Logging from "../../Helpers/Logging";
import {IResponseUploadFile} from "../../Views/Users/Enhancers/CreateReception/CreateReception";

interface IFileUploadProps {
  [prop: string]: any
}

interface IFileUploadState {
  loading: boolean;

  [prop: string]: any
}


export interface IFileUpload {
  uploadFile(file: any): Promise<IResponseUploadFile>;
  uploadFileLoading: boolean;
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


const FileUpload = (WrapperComponent: React.ElementType) => {
  return class extends React.Component<IFileUploadProps, IFileUploadState> {

    constructor(props: IFileUploadProps) {
      super(props);
      this.state =this.initialState;
    }

    get initialState() {
      return {
        loading: false,
      }
    }

    toggleLoading = () => {
      this.setState((state) => ({
        loading: !state.loading
      }))
    };


    uploadFile = <PromiseResponse extends any | IResponseUploadFile>(file: any): Promise<IResponseUploadFile> => {
      const formData = new FormData();
      formData.append('file', file);
      this.toggleLoading();
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
            this.toggleLoading();
            return response;
          } else {
            throw response;
          }
        })
        .catch((error: any) => {
          Logging(error.statusText, 'error');
          this.toggleLoading();
          return error;
        })
    };

    render() {
      return (<WrapperComponent
        uploadFile={this.uploadFile}
        uploadFileLoading={this.state.loading}
        {...this.props}/>)
    }
  }
};

export default FileUpload;
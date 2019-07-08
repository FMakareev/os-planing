import * as React from 'react';
import {FormApi} from "final-form";
import {compose} from "recompose";
import FileUpload from "../../../../Enhancers/FileUpload/FileUpload";
import HasOwnProperty from "../../../../Helpers/HasOwnProperty";

interface IEditMonthReportEnhanceProps {
  [prop: string]: any
}

const enhancer = compose(
  FileUpload,
);


const EditMonthReportEnhance = (WrapperComponent: React.ElementType) => {
  return enhancer(class extends React.Component<IEditMonthReportEnhanceProps> {

    createMonthReport = (values: any) => {

    };

    updateMonthReport = (values: any) => {

    };

    uploadAllFiles = (values: any) => {

    };

    onSubmit = async (values: any, form: FormApi<any>) => {
      if (HasOwnProperty.call(values, 'id')) {
        await this.updateMonthReport(values);
      } else {
       await this.createMonthReport(values);
      }

      setTimeout(form.reset, 500);
    };


    render() {
      const {uploadFileLoading} = this.props;

      return (<WrapperComponent
        loading={uploadFileLoading}
        onSubmit={this.onSubmit}
        {...this.props}/>);
    }
  })
};

export default EditMonthReportEnhance;
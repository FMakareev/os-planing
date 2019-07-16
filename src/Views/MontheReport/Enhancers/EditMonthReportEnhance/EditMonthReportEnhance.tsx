import * as React from 'react';
import {FormApi} from "final-form";
import FileUpload from "../../../../Enhancers/FileUpload/FileUpload";
import HasOwnProperty from "../../../../Helpers/HasOwnProperty";
import CreateMonthReportMutation from './CreateMonthReportMutation.graphql'
import UpdateMonthReportMutation from './UpdateMonthReportMutation.graphql'
import {compose, FetchResult, graphql, MutationFn, MutationResult} from "react-apollo";
import {
  ICreateMonthReportData,
  ICreateMonthReportVariables,
  IUpdateMonthReportData,
  IUpdateMonthReportVariables
} from "../../../../Apollo/Types/MonthReport";
import {IResponseUploadFile} from "../../../Users/Enhancers/CreateReception/CreateReception";
import {RouteComponentProps, withRouter} from "react-router-dom";


interface IEditMonthReportEnhanceProps extends RouteComponentProps {
  CreateMonthReport: MutationFn<ICreateMonthReportData, ICreateMonthReportVariables>;
  CreateMonthReportResult: MutationResult<ICreateMonthReportData>;
  UpdateMonthReport: MutationFn<IUpdateMonthReportData, IUpdateMonthReportVariables>;
  UpdateMonthReportResult: MutationResult<IUpdateMonthReportData>;

  [prop: string]: any
}

const enhancer = compose(
  withRouter,
  FileUpload,
  graphql<ICreateMonthReportData, ICreateMonthReportVariables>(CreateMonthReportMutation, {
    name: 'CreateMonthReport'
  }),
  graphql<IUpdateMonthReportData,
    IUpdateMonthReportVariables>(UpdateMonthReportMutation, {
    name: 'UpdateMonthReport'
  }),
);


const EditMonthReportEnhance = (WrapperComponent: React.ElementType) => {
  return enhancer(class extends React.Component<IEditMonthReportEnhanceProps, any> {

    createMonthReport = async (values: ICreateMonthReportVariables): Promise<FetchResult<ICreateMonthReportData> | any> => {
      return await this.props.CreateMonthReport({
        variables: values,
      })
    };

    updateMonthReport = async (values: IUpdateMonthReportVariables): Promise<FetchResult<IUpdateMonthReportData> | any>  => {
      return await this.props.UpdateMonthReport({
        variables: values,
      })
    };

    uploadAllFiles = async (values: ICreateMonthReportVariables): Promise<any> => {
      const promiseAll = values.attachments.reduce((accum: any[], item: any) => {
        if (item instanceof File) {
          accum.push(this.props.uploadFile(item));
        }
        return accum;
      }, []);

      const data: IResponseUploadFile[] = await Promise.all(promiseAll);
      return [
        ...data.map((item) => item.file_data && item.file_data.id),
        ...values.attachments
          .filter((item) => !(item instanceof File))
          .map((item) => item.id),
      ];
    };

    onSubmit = async (values: any, _: FormApi<any>) => {
      const {history} = this.props;
      if (HasOwnProperty.call(values, 'attachments') && values.attachments.length) {
        values.attachments = await this.uploadAllFiles(values);
      }

      if (HasOwnProperty.call(values, 'id')) {
        const {data}: FetchResult<IUpdateMonthReportData> = await this.updateMonthReport(values);
        if(data){
          history.push(`/month-report/${data.updateMonthReport.monthReport.id}`)
        }
      } else {
        const {data}: FetchResult<ICreateMonthReportData> =  await this.createMonthReport(values);
        if(data){
          history.push(`/month-report/${data.createMonthReport.monthReport.id}`)
        }
      }
    };


    render() {
      const {CreateMonthReportResult, UpdateMonthReportResult} = this.props;
      const {uploadFileLoading} = this.props;

      return (<WrapperComponent
        loading={uploadFileLoading || CreateMonthReportResult.loading || UpdateMonthReportResult.loading}
        onSubmit={this.onSubmit}
        {...this.props}/>);
    }
  })
};

export default EditMonthReportEnhance;
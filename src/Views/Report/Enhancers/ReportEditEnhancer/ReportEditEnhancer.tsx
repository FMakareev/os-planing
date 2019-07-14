import * as React from 'react';
import {FormApi} from "final-form";
import UpdateReportMutation from './UpdateReportMutation.graphql';
import CreateReportMutation from './CreateReportMutation.graphql';

import FileUpload from "../../../../Enhancers/FileUpload/FileUpload";
import HasOwnProperty from "../../../../Helpers/HasOwnProperty";
import {compose, graphql, MutateProps, QueryResult} from "react-apollo";
import {
  ICreateReportVariables,
  IReport,
  IProject,
  IUpdateReportData,
  IUpdateReportVariables,
  ICreateReportData, IEventCreateVariables, IMassMediaInput, IMassMedia
} from "../../../../Apollo/schema";
import {withRouter} from "react-router-dom";
import {IResponseUploadFile} from "../../../Users/Enhancers/CreateReception/CreateReception";

interface IReportEditEnhancerProps extends MutateProps<any, any> {
  initialValues: IReport;

  UpdateReportMutation(options: any): any;

  UpdateReportMutationResult: any;

  CreateReportMutation(options: any): any;

  CreateReportMutationResult: any;

  [prop: string]: any
}

const enhancer = compose(
  withRouter,
  FileUpload,
  graphql<IUpdateReportData, IUpdateReportVariables>(UpdateReportMutation, {
    name: 'UpdateReportMutation'
  }),
  graphql<ICreateReportData, ICreateReportVariables>(CreateReportMutation, {
    name: 'CreateReportMutation'
  }),
);


const ReportEditEnhancer = (WrapperComponent: React.ElementType) => {
  return enhancer(class extends React.Component<IReportEditEnhancerProps> {

    formatValues = (values: any): any => {
      if (HasOwnProperty.call(values, 'projects')) {
        values.projects = values.projects.map((item: IProject) => item.id)
      }
      if (HasOwnProperty.call(values, 'event') && typeof  values.event !== 'string') {
        values.event = values.event.id;
      }
      if (HasOwnProperty.call(values, 'massMedia')) {
        values.massMedia = values.massMedia.map((item: IMassMedia ) => ({
          link: item.link,
          title: item.title,
        }))
      }
      return values;
    };

    createReport = async (values: ICreateReportVariables): Promise<QueryResult<ICreateReportData>> => {
      return await this.props.CreateReportMutation({
        variables: {
          ...values,
        }
      });
    };

    updateReport = async (values: IUpdateReportVariables): Promise<QueryResult<IUpdateReportData>> => {
      return await this.props.UpdateReportMutation({
        variables: values
      });
    };

    uploadAllFiles = async (values: ICreateReportVariables): Promise<any> => {
      const promiseAll = values.attachments.reduce((accum: any[], item: any) => {
        if (item instanceof File) {
          accum.push(this.props.uploadFile(item));
        }
        return accum;
      }, []);

      const data: IResponseUploadFile[] = await Promise.all(promiseAll);
      console.log(data);
      return [
        ...data.map((item) => item.file_data && item.file_data.id),
        ...values.attachments
          .filter((item) => !(item instanceof File))
          .map((item) => item.id),
      ];
    };

    onSubmit = async (values: ICreateReportVariables, form: FormApi<any>) => {
      if (HasOwnProperty.call(values, 'attachments') && values.attachments.length) {
        values.attachments = await this.uploadAllFiles(values);
      }

      if (HasOwnProperty.call(values, 'id')) {
        const data = await this.updateReport(this.formatValues(values));
        if (data.data) {
          this.props.history.push(`/report/${data.data.updateReport.report.event.id}/${data.data.updateReport.report.id}`)
        }
      } else {
        const data = await this.createReport(this.formatValues(values));
        if (data.data) {
          this.props.history.push(`/report/${data.data.createReport.report.event.id}/${data.data.createReport.report.id}`)
        }
      }

      setTimeout(form.reset, 500);
    };


    render() {
      const {uploadFileLoading} = this.props;

      return (<WrapperComponent
        loading={uploadFileLoading}
        onSubmit={this.onSubmit}
        {...this.props}
      />);
    }
  })
};

export default ReportEditEnhancer;
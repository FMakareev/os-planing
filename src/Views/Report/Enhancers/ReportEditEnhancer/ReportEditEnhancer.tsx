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
  ICreateReportData
} from "../../../../Apollo/schema";
import {withRouter} from "react-router-dom";

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
      return values;
    };

    createReport = async (values: any): Promise<QueryResult<ICreateReportData>> => {
      return await this.props.CreateReportMutation({
        variables: {
          ...values,
        }
      });
    };

    updateReport = async (values: any): Promise<QueryResult<IUpdateReportData>> => {
      return await this.props.UpdateReportMutation({
        variables: values
      });
    };

    uploadAllFiles = async (values: any): Promise<any> => {

    };

    onSubmit = async (values: IReport, form: FormApi<any>) => {
      console.log(values);
      if (HasOwnProperty.call(values, 'id')) {
        const data = await this.updateReport(this.formatValues(values));
        if (data.data) {
          this.props.history.push(`/event/${data.data.report.event.id}`)
        }
      } else {
        const data = await this.createReport(this.formatValues(values));
        if (data.data) {
          this.props.history.push(`/event/${data.data.report.event.id}`)
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
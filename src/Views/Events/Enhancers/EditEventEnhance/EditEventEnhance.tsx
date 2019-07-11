import * as React from 'react';
import {FormApi} from "final-form";
import UpdateEventMutation from './UpdateEventMutation.graphql';
import CreateEventMutation from './CreateEventMutation.graphql';

import FileUpload from "../../../../Enhancers/FileUpload/FileUpload";
import HasOwnProperty from "../../../../Helpers/HasOwnProperty";
import {compose, graphql, MutateProps, QueryResult} from "react-apollo";
import {
  EventStatusEnum,
  ICreateEventVariables,
  IEvent,
  IProject,
  IUpdateEventData,
  IUpdateEventVariables,
  ICreateEventData
} from "../../../../Apollo/schema";
import {withRouter} from "react-router-dom";

interface IEditEventEnhanceEnhanceProps extends MutateProps<any, any> {
  initialValues: IEvent;

  UpdateEventMutation(options: any): any;

  UpdateEventMutationResult: any;

  CreateEventMutation(options: any): any;

  CreateEventMutationResult: any;

  [prop: string]: any
}

const enhancer = compose(
  withRouter,
  FileUpload,
  graphql<IUpdateEventData, IUpdateEventVariables>(UpdateEventMutation, {
    name: 'UpdateEventMutation'
  }),
  graphql<ICreateEventData, ICreateEventVariables>(CreateEventMutation, {
    name: 'CreateEventMutation'
  }),
);


const EditEventEnhance = (WrapperComponent: React.ElementType) => {
  return enhancer(class extends React.Component<IEditEventEnhanceEnhanceProps> {

    formatValues = (values: any): any => {
      if (HasOwnProperty.call(values, 'projects')) {
        values.projects = values.projects.map((item: IProject) => item.id)
      }
      return values;
    };

    createEvent = async (values: any): Promise<QueryResult<ICreateEventData>> => {
      return await this.props.CreateEventMutation({
        variables: {
          ...values,
          status: EventStatusEnum.noReport,
        }
      });
    };

    updateEvent = async (values: any): Promise<QueryResult<IUpdateEventData>> => {
      return await this.props.UpdateEventMutation({
        variables: values
      });
    };

    uploadAllFiles = async (values: any): Promise<any> => {

    };

    onSubmit = async (values: any, form: FormApi<any>) => {
      console.log(values);
      if (HasOwnProperty.call(values, 'id')) {
        const data = await this.updateEvent(this.formatValues(values));
        if (data.data) {
          this.props.history.push(`/event/${data.data.updateEvent.event.id}`)
        }
      } else {
        const data = await this.createEvent(this.formatValues(values));
        if (data.data) {
          this.props.history.push(`/event/${data.data.createEvent.event.id}`)
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

export default EditEventEnhance;
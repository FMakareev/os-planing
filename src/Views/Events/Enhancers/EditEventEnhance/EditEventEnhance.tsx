import * as React from 'react';
import {FormApi} from "final-form";
import UpdateEventMutation from './UpdateEventMutation.graphql';
import CreateEventMutation from './CreateEventMutation.graphql';

import FileUpload, {IFileUpload} from "../../../../Enhancers/FileUpload/FileUpload";
import HasOwnProperty from "../../../../Helpers/HasOwnProperty";
import {compose, graphql, MutateProps, QueryResult} from "react-apollo";
import {
  EventStatusEnum,
  ICreateEventVariables,
  IEvent,
  IProject,
  IUpdateEventData,
  IUpdateEventVariables,
  ICreateEventData,
  IEventCreateVariables
} from "../../../../Apollo/schema";
import {withRouter} from "react-router-dom";
import {IResponseUploadFile} from "../../../Users/Enhancers/CreateReception/CreateReception";

interface IEditEventEnhanceEnhanceProps extends MutateProps<any, any>, IFileUpload {
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

// TODO: возможно добавить после каждого обновления изменение статуса на "ожидает проверку" если стату
//  не "не требует отчета",
//  и решить вопрос как быть с обновлением отчета там тоже нужно обновлять статус события и кнопка создания отчета
//  должна ли быть если статус "не требует отчета"
const EditEventEnhance = (WrapperComponent: React.ElementType) => {
  return enhancer(class extends React.Component<IEditEventEnhanceEnhanceProps> {

    formatValues = (values: IEventCreateVariables): any => {
      if (HasOwnProperty.call(values, 'projects') && values.projects) {
        values.projects = values.projects.map((item: IProject) => item.id)
      }
      if (HasOwnProperty.call(values, 'reception') && values.reception) {
        values.reception = values.reception.id;
      }
      return values;
    };

    createEvent = async (values: IEventCreateVariables): Promise<QueryResult<ICreateEventData>> => {
      return await this.props.CreateEventMutation({
        variables: {
          ...values,
          status: EventStatusEnum.waitReport,
        }
      });
    };

    updateEvent = async (values: IEventCreateVariables): Promise<QueryResult<IUpdateEventData>> => {
      return await this.props.UpdateEventMutation({
        variables: {
          ...values,
          ...(values.status !== EventStatusEnum.noReport ? {
            status: EventStatusEnum.waitReview
          } : {}),
        },


      });
    };

    uploadAllFiles = async (values: IEventCreateVariables): Promise<any> => {

      const promiseAll = values.attachments.reduce((accum: any[], item: any) => {
        if (item instanceof File) {
          accum.push(this.props.uploadFile(item));
        }
        return accum;
      }, []);

      const data: IResponseUploadFile[] = await Promise.all(promiseAll);

      return [
        ...data.map((item: IResponseUploadFile) => item.file_data && item.file_data.id),
        ...values.attachments
          .filter((item) => !(item instanceof File))
          .map((item) => item.id),
      ];
    };

    onSubmit = async (values: any, form: FormApi<any>) => {
      if (HasOwnProperty.call(values, 'attachments') && values.attachments.length) {
        values.attachments = await this.uploadAllFiles(values);
      }

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
import * as React from 'react';
import {Field, FieldProps, Form, FormRenderProps} from "react-final-form";
import {ReactNode} from "react";
import {FieldArray} from "react-final-form-arrays";
import arrayMutators from 'final-form-arrays'
import createDecorator from 'final-form-focus'

import {TextField} from "../../../../Components/TextField/TextField";
import DropFieldWithFileList from '../../../../Components/DropFieldWithFileList/DropFieldWithFileList';
import DropFieldHoc from "../../../../Components/DropFieldHOC/DropFieldHOC";
import {IReport} from "../../../../Apollo/schema";
import MassMediaField from "../../../MontheReport/Components/MassMediaField/MassMediaField";
import PlusIcon from '../../../../Components/SvgIcons/PlusIcon';
import config from "../../../../config";

const DropFieldWithHOC = DropFieldHoc(DropFieldWithFileList)();

export interface IFormReportEditValues extends IReport {
  [prop: string]: any
}

interface IFormReportEditValidation {
  [prop: string]: any
}

interface IFormReportEditProps {
  loading?: boolean;

  onSubmit: any;

  initialValues?: IReport;

  [prop: string]: any
}

const focusOnError = createDecorator()


const FormReportEditValidation = (values: IFormReportEditValues) => {
  const errors: any = {};

  if(!values.about){
    errors.about = 'Обязательно для заполнения';
  }
  if(!values.event){
    errors.event = 'Обязательно для заполнения';
  }
  if(!values.goals){
    errors.goals = 'Обязательно для заполнения';
  }
  if(!values.place){
    errors.place = 'Обязательно для заполнения';
  }
  if(!values.producer){
    errors.producer = 'Обязательно для заполнения';
  }

  return errors;

}


export const FormReportEdit: React.FC<IFormReportEditProps> = ({loading,initialValues, onSubmit}) => (
  <Form
    validate={FormReportEditValidation}
    decorators={[focusOnError]}
    initialValues={initialValues}
    onSubmit={onSubmit}
    mutators={{
      ...arrayMutators
    }}
    render={({
               submitError,
               handleSubmit,
               form: {
                 mutators: {push}
               },
             }: FormRenderProps<IFormReportEditValues>): ReactNode => {
      return (<form id={'FormReportEdit'} onSubmit={handleSubmit} className="form">
        <Field
          name="place"
          type="text"
          placeholder=""
          label={'Место проведения мероприятия'}
          disabled={loading}
        >
          {
            (props: FieldProps<any, any>) => (<TextField {...props}/>)
          }
        </Field>
        <Field
          name="task"
          as={'textarea'}
          type="text"
          placeholder=""
          label={'Задача'}
          help={'Зачем было проведено мероприятие'}
          disabled={loading}
        >
          {
            (props: FieldProps<any, any>) => (<TextField {...props}/>)
          }
        </Field>
        <Field
          name="producer"
          type="text"
          as={'textarea'}
          placeholder={"ФИО, место работы"}
          label={'Кто поставил задачу'}
          disabled={loading}
        >
          {
            (props: FieldProps<any, any>) => (<TextField {...props}/>)
          }
        </Field>
        <Field
          name="goals"
          type="text"
          as={'textarea'}
          placeholder={""}
          label={'Цели мероприятия'}
          disabled={loading}
        >
          {
            (props: FieldProps<any, any>) => (<TextField {...props}/>)
          }
        </Field>
        <Field
          name="participantsCount"
          type="number"
          placeholder={""}
          label={'Количество участников, присутствовавших на мероприятии'}
          disabled={loading}
        >
          {
            (props: FieldProps<any, any>) => (<TextField {...props}/>)
          }
        </Field>
        <Field
          name="participantsAbout"
          type="text"
          placeholder={""}
          as={'textarea'}
          label={'ФИО основных участников'}
          disabled={loading}
        >
          {
            (props: FieldProps<any, any>) => (<TextField {...props}/>)
          }
        </Field>
        <Field
          name="treatmentInTheReception"
          type="number"
          placeholder={""}
          label={'Количество встреч с гражданами (обращения в приемную)'}
          disabled={loading}
        >
          {
            (props: FieldProps<any, any>) => (<TextField {...props}/>)
          }
        </Field>
        <Field
          as={'textarea'}
          name="about"
          type="text"
          placeholder={""}
          label={'Описание мероприятия'}
          help={'тезисно: как прошло, какие были поставлены вопросы, какие были проблемы/недопонимания, какие приняты решения'}
          disabled={loading}
        >
          {
            (props: FieldProps<any, any>) => (<TextField {...props}/>)
          }
        </Field>


        <h2 className="h2">
          Ссылки на СМИ о мероприятиях
        </h2>

        <FieldArray name={"massMedia"}>
          {
            ({fields}: any) => {
              return fields.map((name: any, index: number) => {
                return (<MassMediaField
                  onDelete={() => fields.remove(index)}
                  index={index + 1}
                  key={`MassMediaField-${index}`}
                  name={name}
                />);
              })
            }
          }
        </FieldArray>

        <div className="add-category">
          <a
            onClick={() => {
              if (loading) return null;
              push('massMedia', undefined)
            }}
            className="add-category__link"
            href="javascript:void(0);"
          >
            <PlusIcon className="icon icon-plus "/>
            Добавить ссылку
          </a>
        </div>

        <Field
          name={"attachments"}
          type={"file"}
          disabled={loading}
          multiple
          accept={config.allowedFileExtensions.join(',')}
          help={'Размер файла не должен привышать 50 мегабайт. Для загрузки разрешены файлы со следующими расширениями: .doc, .docx, pdf, jpeg'}
        >
          {
            (props: FieldProps<any, any>) => (<DropFieldWithHOC
              {...props}
              onChange={props.input.onChange}
            />)
          }
        </Field>

      </form>)
    }}
  />
);

export default FormReportEdit;

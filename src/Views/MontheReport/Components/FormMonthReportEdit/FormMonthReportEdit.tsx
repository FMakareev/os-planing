import * as React from 'react';
import {ReactNode} from "react";
import {Form, Field, FieldProps, FormRenderProps} from 'react-final-form'
import {FieldArray} from 'react-final-form-arrays'
import arrayMutators from 'final-form-arrays'

import {TextField} from "../../../../Components/TextField/TextField";
import DropFieldWithFileList from '../../../../Components/DropFieldWithFileList/DropFieldWithFileList';
import DropFieldHoc from "../../../../Components/DropFieldHOC/DropFieldHOC";
import MassMediaField from '../MassMediaField/MassMediaField';
import ReceptionActivitiesReport from "../ReceptionActivitiesReport/ReceptionActivitiesReport";
import PlusIcon from "../../../../Components/SvgIcons/PlusIcon";
import {IMonthReport} from "../../../../Apollo/Types/MonthReport";
import config from "../../../../config";


const DropFieldWithHOC = DropFieldHoc(DropFieldWithFileList)();


interface IFormReportEditValues extends IMonthReport {
  [prop: string]: any
}

interface IFormReportEditVariables {
  [prop: string]: any
}

interface IFormReportEditProps {
  loading?: boolean;
  onSubmit?: any;
  initialValues: IMonthReport;

  [prop: string]: any
}

const FormMonthReportEditValidate = (values: IFormReportEditValues) => {
  const errors: any = {};

  if(!values.currentActivity){
    errors.currentActivity = 'Обязательно для заполнения';
  }
  if(!values.descriptionOfTheMainProblemTopics){
    errors.descriptionOfTheMainProblemTopics = 'Обязательно для заполнения';
  }
  if(!values.expectedNegativeEvents){
    errors.expectedNegativeEvents = 'Обязательно для заполнения';
  }
  if(!values.keyConflictResolution){
    errors.keyConflictResolution = 'Обязательно для заполнения';
  }
  if(!values.mainProblems){
    errors.mainProblems = 'Обязательно для заполнения';
  }
  if(!values.receptionAchievement){
    errors.receptionAchievement = 'Обязательно для заполнения';
  }
  if(!values.treatmentInTheReception){
    errors.treatmentInTheReception = 'Обязательно для заполнения';
  }
  if(!values.whatProblemsWereSolved){
    errors.whatProblemsWereSolved = 'Обязательно для заполнения';
  }

  return errors;
}


export const FormMonthReportEdit: React.FC<IFormReportEditProps> = ({loading, onSubmit, initialValues}) => (
  <Form
    validate={FormMonthReportEditValidate}
    initialValues={initialValues}
    mutators={{
      ...arrayMutators
    }}
    onSubmit={onSubmit}
    render={({
               submitError,
               handleSubmit,
               form: {
                 mutators: {push}
               },
               values,
             }: FormRenderProps<IFormReportEditValues>): ReactNode => {
      console.log(values);
      return (
        <form onSubmit={handleSubmit} id={'FormMonthReportEdit'} className="form">


          <ReceptionActivitiesReport {...initialValues}/>

          <div className="br"/>

          <Field
            name="currentActivity"
            type={"type"}
            as={"textarea"}
            placeholder="Описание"
            label={'Текущая деятельность приемной'}
            disabled={loading}
          >
            {
              (props: FieldProps<any, any>) => (<TextField {...props}/>)
            }
          </Field>

          <Field
            name={"receptionAchievement"}
            type={"type"}
            as={"textarea"}
            placeholder={"Описание"}
            label={'Значимые итоги/достижения деятельности приемной'}
            disabled={loading}
          >
            {
              (props: FieldProps<any, any>) => (<TextField {...props}/>)
            }
          </Field>

          <Field
            name={"mainProblems"}
            type={"type"}
            as={"textarea"}
            placeholder={"Описание"}
            label={'Основные проблемы, с которыми столкнулись сотрудники приемной при работе в отчетный период '}
            disabled={loading}
            help={'Взаимодействие с населением, руководством города/предприятия, бытовые'}
          >
            {
              (props: FieldProps<any, any>) => (<TextField {...props}/>)
            }
          </Field>

          <div className="br"/>

          <h2 className="h2">
            Отчет о территории
          </h2>

          <Field
            name={"descriptionOfTheMainProblemTopics"}
            type={"type"}
            as={"textarea"}
            placeholder={"Описание"}
            label={'Описание основных проблемных тем в городе и на предпиятии за отчетный период'}
            disabled={loading}
          >
            {
              (props: FieldProps<any, any>) => (<TextField {...props}/>)
            }
          </Field>

          <Field
            name={"expectedNegativeEvents"}
            type={"type"}
            as={"textarea"}
            placeholder={"Описание"}
            label={'Ожидаемые отрицательные события в следующем за отчетным периодом месяце'}
            disabled={loading}
          >
            {
              (props: FieldProps<any, any>) => (<TextField {...props}/>)
            }
          </Field>

          <Field
            name={"whatProblemsWereSolved"}
            type={"type"}
            as={"textarea"}
            placeholder={"Описание"}
            label={'Какие проблемы били решены в городе и на предпиятии за отчетный период'}
            disabled={loading}
          >
            {
              (props: FieldProps<any, any>) => (<TextField {...props}/>)
            }
          </Field>

          <Field
            name={"keyConflictResolution"}
            type={"type"}
            as={"textarea"}
            placeholder={"Описание"}
            label={'Конфликты, недовольство, возмущения граждан. Ключевые решения.'}
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

          <div className="add-category n-form__group">
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

export default FormMonthReportEdit;

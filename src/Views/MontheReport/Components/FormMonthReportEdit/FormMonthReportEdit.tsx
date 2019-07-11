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
import {IMonthReport} from "../../../../Apollo/schema";


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

  [prop: string]: any
}

const FormMonthReportEditValidate = (values: IFormReportEditValues) => {
  return {};
}


export const FormMonthReportEdit: React.FC<IFormReportEditProps> = ({loading}) => (
  <Form
    validate={FormMonthReportEditValidate}
    mutators={{
      ...arrayMutators
    }}
    onSubmit={(values: any) => {
      console.log(values);
    }}
    render={({
               submitError,
               handleSubmit,
               form: {
                 mutators: {push}
               },
             }: FormRenderProps<IFormReportEditVariables>): ReactNode => {
      return (
        <form onSubmit={handleSubmit} id={'FormMonthReportEdit'} className="form">


          <ReceptionActivitiesReport/>

          <div className="br"/>

          <Field
            name="name"
            type={"type"}
            as={"textarea"}
            placeholder="Описание"
            label={'текущая деятельность приемной'}
            disabled={loading}
          >
            {
              (props: FieldProps<any, any>) => (<TextField {...props}/>)
            }
          </Field>

          <Field
            name={"name"}
            type={"type"}
            as={"textarea"}
            placeholder={"Описание"}
            label={'значимые итоги/достижения деятельности приемной'}
            disabled={loading}
          >
            {
              (props: FieldProps<any, any>) => (<TextField {...props}/>)
            }
          </Field>

          <Field
            name={"name"}
            type={"type"}
            as={"textarea"}
            placeholder={"Описание"}
            label={'основные проблемы, с которыми столкнулись сотрудники приемной при работе в отчетный период '}
            disabled={loading}
            help={'взаимодействие с населением, руководством города/предприятия, бытовые'}
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
            name={"name"}
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
            name={"name"}
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
            name={"name"}
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
            name={"name"}
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
                console.log(fields);
                return fields.map((name: any, index: number) => {
                  console.log(name);
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

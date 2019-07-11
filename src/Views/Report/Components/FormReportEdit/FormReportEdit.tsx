import * as React from 'react';
import {TextField} from "../../../../Components/TextField/TextField";
import DropFieldWithFileList from '../../../../Components/DropFieldWithFileList/DropFieldWithFileList';
import DropFieldHoc from "../../../../Components/DropFieldHOC/DropFieldHOC";
import {Field, FieldProps, Form, FormRenderProps} from "react-final-form";
import {IReport} from "../../../../Apollo/schema";
import {ReactNode} from "react";
import {FieldArray} from "react-final-form-arrays";
import arrayMutators from 'final-form-arrays'
import MassMediaField from "../../../MontheReport/Components/MassMediaField/MassMediaField";
import PlusIcon from '../../../../Components/SvgIcons/PlusIcon';

const DropFieldWithHOC = DropFieldHoc(DropFieldWithFileList)();

interface IFormReportEditValues extends IReport {
  [prop: string]: any
}

interface IFormReportEditValidation {
  [prop: string]: any
}

interface IFormReportEditProps {
  loading?: boolean;

  onSubmit?(values: IFormReportEditValues): Promise<any>;

  initialValues?: IReport;

  [prop: string]: any
}

export const FormReportEdit: React.FC<IFormReportEditProps> = ({loading}) => (
  <Form
    onSubmit={() => {
    }}
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
          type="text"
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
          label={'ФИО основных участников'}
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
          help={'тезисно: как прошло, какие были поставлены вопросы, какие были продлемы/недопонимания,  какие приняты решения'}
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

export default FormReportEdit;

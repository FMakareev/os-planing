import * as React from 'react';
import {TextField} from '../../../../Components/TextField/TextField';
import TagField from '../../../../Components/TagField/TagField';
import DropFieldHoc from "../../../../Components/DropFieldHOC/DropFieldHOC";
import DropFieldWithFileList from "../../../../Components/DropFieldWithFileList/DropFieldWithFileList";
import {Field, FieldProps, Form} from "react-final-form";
import {IEvent} from "../../../../Apollo/schema";
import GetProjectList from "../../Enhancers/GetProjectList/GetProjectList";

interface IFormProjectEditorProps {
  initialValues: IEvent;
  loading?: boolean;

  [prop: string]: any
}

const DropFieldWithHOC = DropFieldHoc(DropFieldWithFileList)();


interface IFormProjectEditorValidation {
  title?: string;
  text?: string;
  projects?: string;

  [prop: string]: any
}


const FormProjectEditorValidation = (values: IEvent) => {
  const errors: IFormProjectEditorValidation = {};

  if (!values.title) {
    errors.title = 'Обязательно для заполнения';
  }
  if (!values.text) {
    errors.text = 'Обязательно для заполнения';
  }
  if (!values.projects || Array.isArray(values.projects) && !values.projects.length) {
    errors.projects = 'Обязательно для заполнения';
  }

  return errors;
};


export const FormProjectEditor: React.FC<IFormProjectEditorProps> = ({initialValues, onSubmit, loading}) => (
  <Form
    validate={FormProjectEditorValidation}
    initialValues={initialValues}
    onSubmit={onSubmit}
    render={({
               submitError,
               handleSubmit,
             }) => {

      return (<form
        onSubmit={handleSubmit}
        id={'FormProjectEditor'}
        className="form"
      >

        <Field
          name="title"
          type="text"
          placeholder="Название мероприятия"
          label={'Заголовок'}
          disabled={loading}
        >
          {
            (props: FieldProps<any, any>) => (<TextField {...props}/>)
          }
        </Field>

        <Field
          name="city"
          type="text"
          placeholder="Название Города"
          label={'Город'}
          disabled={true}
        >
          {
            (props: FieldProps<any, any>) => (<TextField {...props}/>)
          }
        </Field>

        <div className="form__category">
          <GetProjectList
            render={({options}: any) => (<Field
              as={'textarea'}
              name="projects"
              type="text"
              placeholder="Описание мероприятия"
              label={'Текст'}
              disabled={loading}

            >
              {
                (props: FieldProps<any, any>) => (<TagField
                  isMulti
                  {...props.input}
                  metaInput={props.meta}
                  labelKey={'name'}
                  valueKey={'id'}
                  selected={props.input.value}
                  options={options}
                />)
              }
            </Field>)}
          />
        </div>


        <Field
          as={'textarea'}
          name={"text"}
          type={"text"}
          placeholder="Описание мероприятия"
          label={'Текст'}
          disabled={loading}
        >
          {
            (props: FieldProps<any, any>) => (<TextField {...props}/>)
          }
        </Field>

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

export default FormProjectEditor;

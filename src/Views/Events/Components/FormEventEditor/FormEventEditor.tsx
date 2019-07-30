import * as React from 'react';
import {TextField} from '../../../../Components/TextField/TextField';
import TagField from '../../../../Components/TagField/TagField';
import DropFieldHoc from "../../../../Components/DropFieldHOC/DropFieldHOC";
import DropFieldWithFileList from "../../../../Components/DropFieldWithFileList/DropFieldWithFileList";
import {Field, FieldProps, Form} from "react-final-form";
import createDecorator from 'final-form-focus'

import {IEvent} from "../../../../Apollo/schema";
import GetProjectList from "../../Enhancers/GetProjectList/GetProjectList";
import config from "../../../../config";

interface IFormEventEditorProps {
  initialValues: IEvent;
  loading?: boolean;

  [prop: string]: any
}

const DropFieldWithHOC = DropFieldHoc(DropFieldWithFileList)();


interface IFormEventEditorValidation {
  title?: string;
  text?: string;
  projects?: string;

  [prop: string]: any
}


const FormEventEditorValidation = (values: IEvent) => {
  const errors: IFormEventEditorValidation = {};

  if (!values.title) {
    errors.title = 'Обязательно для заполнения';
  }
  if (!values.text) {
    errors.text = 'Обязательно для заполнения';
  }
  // if (!values.projects || Array.isArray(values.projects) && !values.projects.length) {
  //   errors.projects = 'Обязательно для заполнения';
  // }

  return errors;
};

const focusOnError = createDecorator();

export const FormEventEditor: React.FC<IFormEventEditorProps> = ({initialValues, onSubmit, loading}) => (
  <Form
    validate={FormEventEditorValidation}
    initialValues={initialValues}
    decorators={[focusOnError]}
    onSubmit={onSubmit}
    render={({
               submitError,
               handleSubmit,
             }) => {

      return (<form
        onSubmit={handleSubmit}
        id={'FormEventEditor'}
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
          as={'textarea'}
          name={"city"}
          type={"text"}
          placeholder={"Название Города"}
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

export default FormEventEditor;

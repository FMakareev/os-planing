import * as React from 'react';
import {Form, Field, FieldProps, FormRenderProps} from 'react-final-form'

import {Button} from "../../../../Components/Button/Button";
import {TextField} from "../../../../Components/TextField/TextField";
import {ReactNode} from "react";
import {InvalidFeedback} from "../../../../Components/InvalidFeedback/InvalidFeedback";
import Preloader, {PreloaderThemeEnum} from "../../../../Components/Preloader/Preloader";
import createDecorator from "final-form-focus";

interface IFormCreateProjectProps {
  [prop: string]: any
}

interface FormCreateProjectState {
  name?: string;
}

const FormCreateProjectValidate = (values: FormCreateProjectState) => {
  const errors: FormCreateProjectState = {};

  if (!values.name) {
    errors.name = 'Обязательно для заполнения'
  }
  return errors
};
const focusOnError = createDecorator();

const FormCreateProject: React.FC<IFormCreateProjectProps> = ({loading, initialValues, onSubmit}) => {
  return (
    <Form
      validate={FormCreateProjectValidate}
      onSubmit={onSubmit}
      decorators={[focusOnError]}
      render={({
                 submitError,
                 handleSubmit,
                 form,
                 submitting,
                 pristine,
               }: FormRenderProps<any>): ReactNode => {

        return (<form
          id={'FormCreateProject'}
          onReset={() => {
            form.reset({});
          }}
          onSubmit={handleSubmit}
          className="form"
        >
          <Field
            name="name"
            type="text"
            placeholder="Название проекта"
            label={'Проект'}
            disabled={loading}
          >
            {
              (props: FieldProps<any, any>) => (<TextField {...props}/>)
            }
          </Field>
          {submitError && <InvalidFeedback error={submitError}/>}

          <Button mods={'button-primary--preloader'} disabled={pristine} type={'submit'}>
            Сохранить {loading && <Preloader theme={PreloaderThemeEnum.light} style={{marginLeft: '8px'}}/>}
          </Button>
        </form>)
      }}
    />
  );
};

export default FormCreateProject;
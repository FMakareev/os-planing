import * as React from 'react';
import {Form, Field, FieldProps, FormRenderProps} from 'react-final-form'

import {Button} from "../../../../Components/Button/Button";
import {TextField} from "../../../../Components/TextField/TextField";
import {ReactNode} from "react";
import {InvalidFeedback} from "../../../../Components/InvalidFeedback/InvalidFeedback";
import Preloader, {PreloaderThemeEnum} from "../../../../Components/Preloader/Preloader";

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

const FormCreateProject: React.FC<IFormCreateProjectProps> = () => {
  return (
    <Form
      validate={FormCreateProjectValidate}
      onSubmit={() => {
      }}
      render={({
                 submitError,
                 handleSubmit,
                 form,
                 submitting,
                 pristine,
               }: FormRenderProps<any>): ReactNode => {

        return (<form onSubmit={handleSubmit} className="form">
          <Field
            name="name"
            type="text"
            placeholder="Название проекта"
            label={'Проект'}
          >
            {
              (props: FieldProps<any, any>) => (<TextField {...props}/>)
            }
          </Field>
          {submitError && <InvalidFeedback error={submitError}/>}

          <Button mods={'button-primary--preloader'} disabled={pristine} type={'submit'}>
            Сохранить <Preloader theme={PreloaderThemeEnum.light} style={{marginLeft:'8px'}}/>
          </Button>
        </form>)
      }}
    />
  );
};

export default FormCreateProject;
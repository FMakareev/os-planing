import * as React from 'react';
import {Field, FieldProps, Form, FormRenderProps} from "react-final-form";
import {ReactNode} from "react";
import {TextField} from "../../../../Components/TextField/TextField";
import {Button, ButtonStyleEnum} from "../../../../Components/Button/Button";
import Preloader, {PreloaderThemeEnum} from "../../../../Components/Preloader/Preloader";
import {IPrivacyBlock} from "../../../../Apollo/schema";


interface IPrivacySectionEditProps {
  onSubmit(values: IPrivacyBlock): Promise<any>;

  cancelCallback?: any;
  loading: boolean;
  initialValues: IPrivacyBlock;

  [prop: string]: any
}


const PrivacySectionEdit: React.FC<IPrivacySectionEditProps> = ({onSubmit, loading, initialValues, cancelCallback}) => {
  let id = `PrivacySectionEdit-${initialValues.index}`;
  React.useEffect(() => {
    const form = document.getElementById(id);
    if (form) {
      form.scrollIntoView({
        block: "center",
        inline: "nearest",
        behavior: 'smooth',

      });
    }
  }, []);

  return (
    <Form
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={(value)=>{
        const errors: any = {};
        if(!value.title){
          errors.title = 'Обязательно для заполнения'
        }
        if(!value.content){
          errors.content = 'Обязательно для заполнения'
        }

        return errors
      }}
      render={({
                 submitError,
                 handleSubmit,
                 form,
                 submitting,
                 pristine,
               }: FormRenderProps<IPrivacyBlock>): ReactNode => {

        return (<form id={id} onSubmit={handleSubmit}>
          <Field
            name="title"
            type="text"
            placeholder=""
            label={'Заголовок'}
            disabled={loading}
          >
            {
              (props: FieldProps<any, any>) => (<TextField {...props}/>)
            }
          </Field>
          <Field
            as={'textarea'}
            name="content"
            type="text"
            placeholder=""
            label={'Текст'}
            disabled={loading}
            rows={10}
          >
            {
              (props: FieldProps<any, any>) => (<TextField {...props}/>)
            }
          </Field>
          <div className="button-links">
            <Button mods={'button-primary--preloader'} disabled={pristine || loading} type={'submit'}>
              Сохранить {loading && <Preloader theme={PreloaderThemeEnum.light} style={{marginLeft: '8px'}}/>}
            </Button>
            <Button
              style={ButtonStyleEnum.border}
              styles={{marginBottom: '30px'}}
              type={'button'}
              onClick={() => {
                form.reset(initialValues);
                cancelCallback && cancelCallback();
              }}
            >
              Отмена
            </Button>
          </div>
        </form>)
      }}
    />
  );
};

export default PrivacySectionEdit;
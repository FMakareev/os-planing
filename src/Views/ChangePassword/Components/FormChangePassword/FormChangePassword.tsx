import * as React from 'react';
import {TextFieldPassword} from '../TextFieldPassword/TextFieldPassword';
import {Button} from '../../../../Components/Button/Button';

interface IFormChangePasswordProps {
	[prop: string]: any
}

export const FormChangePassword: React.FC<IFormChangePasswordProps> = () => (
	<form className="form form--password">

		<TextFieldPassword
			type="password"
			placeholder="Введите свой текущий пароль"
			label={'Текущий пароль'}
		/>

		<TextFieldPassword
			type="password"
			placeholder="Придумайте новый пароль"
			label={'Новый пароль'}
		/>
		<TextFieldPassword
			type="password"
			placeholder="Повторите новый пароль"
			label={'Повторите пароль'}
		/>
		<Button>
			Изменить пароль
		</Button>
	</form>
);

export default FormChangePassword;

import * as React from 'react';
import {Link} from "react-router-dom";
import LockIcon from "../../../../Assets/img/spritesvg/lock.svg";
import {Button, ButtonStyleEnum} from "../../../../Components/Button/Button";
import {TextField} from '../../../../Components/TextField/TextField';


interface IFormChangeUserProps {
	[prop: string]: any
}

export const FormChangeAdmin: React.FC<IFormChangeUserProps> = () => (
	<form className="form form--setting">
		<TextField
			type={'text'}
			placeholder={'Введите имя'}
			label={'Имя'}
		/>
		<TextField
			type={'email'}
			placeholder={'Введите e-mail'}
			label={'E-mail'}
		/>
		<TextField
			type={'text'}
			placeholder={'Введите хост SMTP'}
			label={'Хост SMTP'}
		/>
		<TextField
			type={'text'}
			placeholder={'Введите порт SMTP'}
			label={'Порт SMTP'}
		/>
		<TextField
			type={'text'}
			placeholder={'Введите логин SMTP'}
			label={'Пользователь SMTP'}
		/>
		<TextField
			type={'text'}
			placeholder={'Введите пароль SMTP'}
			label={'Пароль пользователя SMTP'}
		/>
		<div className="form__group form__group--checkbox">
			<input type="checkbox" checked id="check"/>
				<label htmlFor="check">Использовать tls для SMTP</label>
		</div>

		<TextField
			type={'text'}
			placeholder={'Введите публичный ключ reCAPTCHA'}
			label={'Публичный ключ reCAPTCHA'}
		/>

		<TextField
			type={'text'}
			placeholder={'Введите секретный ключ reCAPTCHA'}
			label={'Секретный ключ reCAPTCHA'}
		/>





		<Link className="change-pass" to={'/change-password'}>
			<img src={LockIcon} className="icon icon-lock "/>
			Сменить пароль
		</Link>
		<div className="form__bsave">
			<Button style={ButtonStyleEnum.primary}>
				Сохранить
			</Button>
		</div>
	</form>
);

export default FormChangeAdmin;

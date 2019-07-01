import * as React from 'react';
import {Link} from "react-router-dom";
import LockIcon from "../../../../Assets/img/spritesvg/lock.svg";
import {Button, ButtonStyleEnum} from "../../../../Components/Button/Button";
import {TextField} from '../../../../Components/TextField/TextField';


interface IFormChangeUserProps {
	[prop: string]: any
}

export const FormChangeUser: React.FC<IFormChangeUserProps> = () => (
	<form className="form form--setting">
		<TextField
			type={'text'}
			placeholder={'Введите имя'}
			label={'Имя'}
		/>
		<TextField
			type={'text'}
			placeholder={'Введите приемную'}
			label={'Приемная'}
			disabled={true}
		/>
		<TextField
			type={'email'}
			placeholder={'Введите e-mail'}
			label={'E-mail'}
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

export default FormChangeUser;

import * as React from 'react';
import PhotoIcon from "../../../../Assets/img/spritesvg/photo.svg";
import {UserAvatar} from '../../../../Components/UserAvatar/UserAvatar';
import {Button, ButtonStyleEnum} from '../../../../Components/Button/Button';

interface IFormChangeAvatarProps {
	[prop: string]: any
}


export class FormChangeAvatar extends React.Component<IFormChangeAvatarProps>{
	render(){

		return (
			<div className="inner-info">
				<div className="change-ava">
					<UserAvatar className={'change-ava__img'}/>
					<button className="change-ava__link">
						<img src={PhotoIcon} className="icon icon-photo "/>
						Сменить фото
					</button>
				</div>
				<div className="b-center">
					<Button hidden={false} style={ButtonStyleEnum.border}>
						Загрузить
					</Button>
				</div>
			</div>
		)
	}
}


export default FormChangeAvatar;

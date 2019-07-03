import * as React from 'react';
import {ITextFieldProps, TextField} from "../../../../Components/TextField/TextField";
import ShowIcon from '../../../../Assets/img/spritesvg/show.svg';
import HideIcon from '../../../../Assets/img/spritesvg/icon_hide.svg';

interface ITextFieldPasswordProps extends ITextFieldProps {
	[prop: string]: any
}

interface ITextFieldPasswordState {
	showPassword: boolean;
}


export class TextFieldPassword extends React.Component<ITextFieldPasswordProps, ITextFieldPasswordState> {

	constructor(props: ITextFieldPasswordProps) {
		super(props);

		this.state = this.initialState;
	}

	get initialState() {
		return {
			showPassword: false,
		}
	}

	showPasswordToggle = (event: any) => {
		event && event.preventDefault();
		this.setState((state) => ({
			showPassword: !state.showPassword,
		}))
	};

	render() {
		const {showPassword} = this.state;
		return (<TextField
			{...this.props}
			type={showPassword ? 'text' : 'password'}
		>
			<a onClick={this.showPasswordToggle} className="form__pass-visible" href="#!">
				<img src={showPassword ? ShowIcon : HideIcon} className="icon icon-show "/>
			</a>
		</TextField>)
	}

}

export default TextFieldPassword;

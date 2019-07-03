import * as React from 'react';
import {IWithSelectProps} from './withSelect';

interface ISelectToggleProps extends IWithSelectProps{
	[prop: string]: any
}

export const SelectToggle: React.FC<ISelectToggleProps> = ({children, placeholder, option, label, onClick}) => (
	<div onClick={onClick} className="form__group form__group--select">
		<div className="jq-selectbox jqselect form__select">
			<div className="jq-selectbox__select">
				<div className="jq-selectbox__select-text">{option || placeholder}</div>
				<div className="jq-selectbox__trigger">
					<div className="jq-selectbox__trigger-arrow"/>
				</div>
			</div>
			{
				children
			}
		</div>
		<label className="form__label">{label}</label>
	</div>
);

export default SelectToggle;

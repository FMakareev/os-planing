import * as React from 'react';
import classNames from "classnames";

interface ITextFieldLabelProps {
	label: string;
	error?: string;
	disabled?: boolean;
	[prop: string]: any
}

export const TextFieldLabel: React.FC<ITextFieldLabelProps> = ({label,disabled, error}) => (
	<div
		className={classNames("n-form__label", {
			'n-form__label--error': error,
			'n-form__input--disabled': disabled,
		})}
	>
		{label}
	</div>
);

export default TextFieldLabel;

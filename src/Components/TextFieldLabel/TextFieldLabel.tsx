import * as React from 'react';
import classNames from "classnames";

interface ITextFieldLabelProps {
	label: string;
	error?: string;
	[prop: string]: any
}

export const TextFieldLabel: React.FC<ITextFieldLabelProps> = ({label, error}) => (
	<label
		className={classNames("form__label", {
			'error': error,
		})}
	>
		{label}
	</label>
);

export default TextFieldLabel;

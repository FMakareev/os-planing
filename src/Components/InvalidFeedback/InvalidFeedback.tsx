import * as React from 'react';
import classNames from "classnames";

interface IInvalidFeedbackProps {
	error: string;

	[prop: string]: any
}

export const InvalidFeedback: React.FC<IInvalidFeedbackProps> = ({error}) => (
	<div className={classNames('form__invalid-feedback', {
		'hidden': !error,
	})}>
		{error}
	</div>
);

export default InvalidFeedback;

import * as React from 'react';
import ReactHtmlParser from 'react-html-parser';

interface IPrivacySectionProps {
	title: string;
	id?: string;
	[prop: string]: any
}

export const PrivacySection: React.FC<IPrivacySectionProps> = ({id, title, children}) => (
	<div id={id}>
		<h2 className="h2">{title}</h2>
		{children && ReactHtmlParser(children)}
	</div>
);

export default PrivacySection;

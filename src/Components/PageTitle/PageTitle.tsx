import * as React from 'react';
import classNames from 'classnames';


export const PageTitle: React.FC<any> = ({children, mods}) => (
	<h1 className={classNames("h1",mods)}>
		{children}
	</h1>);

export default PageTitle;

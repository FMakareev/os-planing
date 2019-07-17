import * as React from 'react';
import {Link} from 'react-router-dom';

interface IBreadcrumbsHistory {
	name: string;
	to: string;
}

interface IBreadcrumbsProps {
	history: IBreadcrumbsHistory[];
}

export const Breadcrumbs: React.FC<IBreadcrumbsProps> = ({history}) => (
	<ul className="breadcrumbs">
		{
			history && history.map((item: IBreadcrumbsHistory, index: number) => {
				if (index === history.length - 1) {
					return (<li key={`breadcrumbs${index}`}><span>{item && item.name}</span></li>)
				}
				return (<li key={`breadcrumbs${index}`}>
					<Link to={item && item.to}>{item && item.name}</Link>
				</li>)
			})
		}
	</ul>);

export default Breadcrumbs;

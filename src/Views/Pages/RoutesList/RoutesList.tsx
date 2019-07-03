import * as React from 'react';
import AppRoutes from '../../AppRoutes';
import {Link} from 'react-router-dom';

interface IRoutesListProps {
	[prop: string]: any
}

export const RoutesList: React.FC<IRoutesListProps> = () => (
	<div>
		{
			AppRoutes.map((item: any, index: number) => (<div key={index}>
				<Link to={item.path}>
					{item.name}
				</Link>
				<br/>
			</div>))
		}
	</div>
);

export default RoutesList;

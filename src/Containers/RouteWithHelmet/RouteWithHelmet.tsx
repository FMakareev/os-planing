import * as React from 'react';
import {Helmet} from "react-helmet";


interface IRouteWithHelmetProps {
	Layout: any;
	[prop:string]: any;
}


export const RouteWithHelmet = (route: any): React.FC<IRouteWithHelmetProps> => ({
																																									 Layout = React.Fragment,
																																									 ...rest
																																								 }) => (
	<React.Fragment>
		<Helmet>
			<meta charSet="utf-8"/>
			<title>{route.name}</title>
		</Helmet>
		<Layout {...rest}>
			<route.component {...rest} />
		</Layout>
	</React.Fragment>
);


export default RouteWithHelmet;

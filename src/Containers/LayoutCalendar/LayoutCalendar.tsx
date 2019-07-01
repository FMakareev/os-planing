//Layout
import * as React from 'react';
import Preloader from "../../Components/Preloader/Preloader";
import {Route, Switch} from "react-router";
import {Helmet} from "react-helmet";

const Footer = React.lazy(() => import('../../Components/Footer/Footer'));
const Header = React.lazy(() => import('../../Components/Header/Header'));
/**
 * @desc
 * */
export const LayoutBase: React.FC<any> = ({routes}) => {
	return (<div>
		<div className="page page--calendar">
			<div className="page-wrap">
				<div className="container">

					<React.Suspense fallback={Preloader()}>
						<Header/>
					</React.Suspense>

					<section>
						<React.Suspense fallback={Preloader()}>
							<Switch>
								{routes && routes.map((route: any, idx: number) => {
									return route && route.component ? (
										<Route
											key={idx}
											path={route.path}
											exact={route.exact}
											name={route.name}
											render={(props: any) => (
												<React.Fragment>
													<Helmet>
														<meta charSet="utf-8"/>
														<title>{route.name}</title>
													</Helmet>
													<route.component {...props} />
												</React.Fragment>
											)}/>
									) : (null);
								})}
							</Switch>
						</React.Suspense>
					</section>

					<React.Suspense fallback={Preloader()}>
						<Footer/>
					</React.Suspense>

				</div>
			</div>
		</div>
	</div>)
};


export default LayoutBase;

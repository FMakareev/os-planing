import * as React from 'react';
import {Helmet} from "react-helmet";
import ErrorBoundary from "../../Enhancers/ErrorBoundary/ErrorBoundary";
import CookiePolicy from "../../Components/CookiePolicy/CookiePolicy";


interface IRouteWithHelmetProps {
  Layout: any;

  [prop: string]: any;
}


export const RouteWithHelmet = (route: any): React.FC<IRouteWithHelmetProps> => ({
                                                                                   Layout = React.Fragment,
                                                                                   ...rest
                                                                                 }) => (
  <ErrorBoundary>
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>{route.name}</title>
      </Helmet>
      <Layout {...rest}>
        <route.component {...rest} />
      </Layout>
      <CookiePolicy/>

    </React.Fragment>
  </ErrorBoundary>
);


export default RouteWithHelmet;

import * as React from 'react';
import {Route, Switch} from 'react-router-dom';
import {setDefaultLocale, registerLocale} from "react-datepicker";
import ru from 'date-fns/locale/ru';
import * as Sentry from '@sentry/browser';
import "react-datepicker/dist/react-datepicker.css";
import './Style/main.scss';
import Preloader, {
  PreloaderPositionEnum,
  PreloaderSizeEnum,
  PreloaderThemeEnum
} from "./Components/Preloader/Preloader";
import AppRoutes from './Views/AppRoutes';
import RouteWithHelmet from "./Containers/RouteWithHelmet/RouteWithHelmet";
import {LAYOUT_AUTH, LAYOUT_CALENDAR} from './Shared/Layouts';
import AppUserInitHoc from './Enhancers/AppUserInitHOC';


Sentry.init({dsn: "https://0ea504e8200c4da18921c777e50e6757@sentry.io/1506875"});


registerLocale('ru', ru);
setDefaultLocale('ru');

const LayoutLogin = React.lazy(() => import("./Containers/LayoutLogin/LayoutLogin"));
const LayoutApp = React.lazy(() => import('./Containers/LayoutApp/LayoutApp'));


export const App: React.FC = () => {
  return (
      <React.Suspense fallback={<Preloader theme={PreloaderThemeEnum.blue} position={PreloaderPositionEnum.center}
                                           size={PreloaderSizeEnum.md}/>}>
        <Switch>
          {AppRoutes && AppRoutes.map((route: any, idx: number) => {
            return route && route.component ? (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={(props: any) => {
                  switch (route.layout) {
                    case(LAYOUT_CALENDAR): {
                      return                      RouteWithHelmet(route)(props);
                    }
                    case(LAYOUT_AUTH): {
                      return                      RouteWithHelmet(route)({
                        ...props,
                        Layout: LayoutLogin
                      });
                    }
                    default: {
                      return RouteWithHelmet(route)({
                        ...props,
                        Layout: LayoutApp
                      });
                    }
                  }

                }}/>
            ) : (null);
          })}
        </Switch>
      </React.Suspense>
  );
};

export default AppUserInitHoc(App);

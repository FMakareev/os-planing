import * as React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {setDefaultLocale, registerLocale} from "react-datepicker";
import ru from 'date-fns/locale/ru';
import "react-datepicker/dist/react-datepicker.css";
import './Style/main.scss';
import Preloader, {PreloaderSizeEnum} from "./Components/Preloader/Preloader";
import AppRoutes from './Views/AppRoutes';
import RouteWithHelmet from "./Containers/RouteWithHelmet/RouteWithHelmet";
import {LAYOUT_AUTH, LAYOUT_CALENDAR} from './Shared/Layouts';

registerLocale('ru', ru);
setDefaultLocale('ru');

const LayoutLogin = React.lazy(() => import("./Containers/LayoutLogin/LayoutLogin"));
const LayoutApp = React.lazy(() => import('./Containers/LayoutApp/LayoutApp'));


export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<Preloader size={PreloaderSizeEnum.sm}/>}>
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
                      return RouteWithHelmet(route)({
                        ...props,
                      })
                    }
                    case(LAYOUT_AUTH): {
                      return RouteWithHelmet(route)({
                        ...props,
                        Layout: LayoutLogin
                      })
                    }
                    default: {
                      return RouteWithHelmet(route)({
                        ...props,
                        Layout: LayoutApp
                      })
                    }
                  }

                }}/>
            ) : (null);
          })}
        </Switch>
      </React.Suspense>

    </BrowserRouter>
  );
};

export default App;

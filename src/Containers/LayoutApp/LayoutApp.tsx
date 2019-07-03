//Layout
import * as React from 'react';
import Preloader from "../../Components/Preloader/Preloader";


const Footer = React.lazy(() => import('../../Components/Footer/Footer'));
const Header = React.lazy(() => import('../../Components/Header/Header'));
/**
 * @desc
 * */
export const LayoutApp: React.FC<any> = ({children}) => {
  return (<div className="page">
    <div className="page-wrap">
      <div className="container">

        <React.Suspense fallback={<Preloader/>}>
          <Header/>
        </React.Suspense>

        {children}

        <React.Suspense fallback={<Preloader/>}>
          <Footer/>
        </React.Suspense>

      </div>
    </div>
  </div>)
};


export default LayoutApp;

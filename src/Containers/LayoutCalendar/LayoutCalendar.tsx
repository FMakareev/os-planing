//Layout
import * as React from 'react';
import Preloader from "../../Components/Preloader/Preloader";


const Footer = React.lazy(() => import('../../Components/Footer/Footer'));
const Header = React.lazy(() => import('../../Components/Header/Header'));



/**
 * @desc
 * */
export const LayoutCalendar: React.FC<any> = ({children, headerChildren}) => {
	return (	<div className="page page--calendar">
		<div className="page-wrap">
			<div className="container">

				<React.Suspense fallback={<Preloader/>}>
					<Header>
						{headerChildren}
					</Header>
				</React.Suspense>

				<section>
					{children}
				</section>

				<React.Suspense fallback={<Preloader/>}>
					<Footer/>
				</React.Suspense>

			</div>
		</div>
	</div>)
};


export default LayoutCalendar;

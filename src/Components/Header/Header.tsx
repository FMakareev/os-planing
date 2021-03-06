import * as React from 'react';
import classNames from 'classnames';
import startLogo from "../../Assets/img/start-logo.svg";
import HeaderProfile from '../HeaderProfile/HeaderProfile';




export const Header: React.FC<any> = ({children}) => (
	<header className={classNames('header', {'header--inner': !children})}>
		<a className="header__logo">
			<img
				src={startLogo}
				alt="start-logo"
			/>
		</a>
		{children}

		<HeaderProfile/>
	</header>
);

export default Header;

import * as React from 'react';
import classNames from 'classnames';

interface IUserAvatarProps {
	avatar?: string;
	href?: string;
	mods?: string;
	onClick?: any;
	className?: any;

	[prop: string]: any;
}

export const UserAvatar: React.FC<IUserAvatarProps> = ({avatar, href, mods, onClick, className}) => (<a
	href={href}
	onClick={onClick}
	className={classNames(className || "profile-header__ava", mods)}
>
	{
		avatar &&
    <img src={avatar} alt="ava"/>
	}
</a>);

UserAvatar.defaultProps = {
	href: 'javascript:void(0);',
};


export default UserAvatar;

import * as React from 'react';
import classNames from 'classnames';
import {Link} from "react-router-dom";


export enum ButtonStyleEnum {
	primary = 'primary',
	icon = 'icon',
	border = 'border',
}

/** какой тег используется для рендера */
export enum ButtonAsEnum {
	button = 'button',
	link = 'link',
}


interface IButtonProps {
	style?: ButtonStyleEnum;
	as?: ButtonAsEnum;
	mods?: string;
	to?: string;
	hidden?: boolean;
	onClick?: any;
	styles?: any;
	[prop: string]: any
}

export const Button: React.FC<IButtonProps> = ({children, style, as, mods,type,disabled, hidden,styles, ...rest}) => {
	const Component = as === ButtonAsEnum.link ? Link : `button`;

	return (
		// @ts-ignore
		<Component
			{...rest}
			type={type}
			style={styles}
			className={
				classNames({
						'button-primary': style === ButtonStyleEnum.primary,
						'button-border': style === ButtonStyleEnum.border,
						'button-icon': style === ButtonStyleEnum.icon,
						'hidden': hidden,
						'disabled': disabled,
					},
					mods
				)
			}
		>
			{children}
		</Component>
	);
};

Button.defaultProps = {
	style: ButtonStyleEnum.primary,
	as: ButtonAsEnum.button,
};

export default Button;

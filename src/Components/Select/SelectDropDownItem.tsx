import * as React from 'react';
import {RefObject} from "react";

interface ISelectDropDownItemProps {
	active?: boolean;
	onMouseEnter?():void;
	onClick?():void;
	className: any;
	[prop: string]: any
}

export class SelectDropDownItem extends React.Component<ISelectDropDownItemProps,any> {
	itemRef: RefObject<any>;

	constructor(props: any) {
		super(props);
		this.itemRef = React.createRef();
	}

	componentDidUpdate(prevProps: any) {
		if (this.props.active) {
			this.itemRef.current.scrollIntoView(false);
		}
	}

	render(){
		const {onMouseEnter,onClick,className, children} = this.props;
		return ( <li
			ref={this.itemRef}
			onMouseEnter={onMouseEnter}
			tabIndex={-1}
			onClick={onClick}
			className={className}
		>

			{children}
		</li>)

	}

}

export default SelectDropDownItem;

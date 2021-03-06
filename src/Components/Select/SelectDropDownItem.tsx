import * as React from 'react';
import {RefObject} from "react";
import {WithSelectEventEnum} from "./withSelect";

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
		if (this.props.active && this.props.currentEvent === WithSelectEventEnum.keyboard) {
			this.itemRef.current.scrollIntoView({
				block: "center",
				inline: "nearest",
			});
		}

		if(!prevProps.isOpen && this.props.active && this.props.isOpen){
			this.itemRef.current.scrollIntoView({
				block: "center",
				inline: "nearest",
			});
		}
	}


	render(){
		const {onMouseEnter,onClick,className, children,label,
			value} = this.props;
		return ( <li
			data-option-value={value}
			data-option-label={label}
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

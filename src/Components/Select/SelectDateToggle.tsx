import * as React from 'react';
import {ISelectBaseAPI} from "./withSelect";

interface ISelectDateToggleProps extends ISelectBaseAPI {
	onClick: any;
	[prop: string]: any
}

export const SelectDateToggle: React.FC<ISelectDateToggleProps> = ({
																	   children,
																	   handleInputChange,
																	   placeholder,
																	   value,
																	   onClick,
																	   wrapperRef,
																	   inputRef,
																	   findSubstring,
																	   meta,
																	   onKeyDown
																   }) => (
	<div className="jq-selectbox__select" onClick={onClick}>
		<div className="jq-selectbox__select-text">{value.label}</div>
		<div className="jq-selectbox__trigger">
			<div className="jq-selectbox__trigger-arrow"/>
		</div>
		<input
			style={{
				opacity: 0,
				position: 'absolute',
			}}
			ref={inputRef}
			className="jq-selectbox__select-text"
			type="text"
			value={meta && meta.focus ? findSubstring : value.label}
			placeholder={placeholder}
			onKeyDown={(event) => {
				onKeyDown && onKeyDown(event.key);
			}}
			onChange={(event) => {
				handleInputChange && handleInputChange(event.target.value);
			}}
		/>
	</div>
);

export default SelectDateToggle;

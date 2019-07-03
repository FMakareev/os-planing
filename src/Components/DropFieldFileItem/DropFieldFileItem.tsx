import * as React from 'react';
import {Close} from '../SvgIcons/Close';

interface IDropFieldFileItemProps {
	name: string;
	onClick: any;

	[prop: string]: any
}

export const DropFieldFileItem: React.FC<IDropFieldFileItemProps> = ({name, onClick}) => (
	<div className="files-item">
		<div className="files-item__name">
			{name}
		</div>
		<a
			onClick={(event) => {
				event.preventDefault();
				onClick();
			}}
			className="files-item__close"
			href="#!"
		>
			<span className="icon icon-close">
				<Close height={'8px'} width={'8px'}/>
			</span>
		</a>
	</div>
);

export default DropFieldFileItem;

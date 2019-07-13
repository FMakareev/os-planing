import * as React from 'react';
import {DropField, IDropFieldProps} from '../DropField/DropField';
import DropFieldFileList, {IDropFieldFileListProps} from "../DropFieldFileList/DropFieldFileList";

interface IDropFieldWithFileListProps extends IDropFieldFileListProps, IDropFieldProps{
	[prop: string]: any
}

export const DropFieldWithFileList: React.FC<IDropFieldWithFileListProps> = (props) =>{
	return  (
		<React.Fragment>
			<DropFieldFileList
				{...props}
			/>
			<DropField
				{...props}
				onChange={props && props.addFile}
			/>
		</React.Fragment>
	);
}

export default DropFieldWithFileList;

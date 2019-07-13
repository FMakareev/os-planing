import * as React from 'react';
import {DropFieldFileItem} from '../DropFieldFileItem/DropFieldFileItem';

export interface IDropFieldFileListProps {
	fileList: any[];
	removeFile(name: string): void;
	[prop: string]: any
}

export const DropFieldFileList: React.FC<IDropFieldFileListProps> = ({fileList,removeFile}) => {
	return (
		<div className="files js-files-previews dropzone-previews">
			{
				fileList.map((item: any, idx: number)=>(<DropFieldFileItem
					key={`DropFieldFileItem-${idx}`}
					name={item.name}
					onClick={()=>removeFile(item.name)}
				/>))
			}

		</div>
	);
}

export default DropFieldFileList;

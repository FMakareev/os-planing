import * as React from 'react';

export interface IDropFieldProps {
	help?: string;

	[prop: string]: any
}

export const DropField: React.FC<IDropFieldProps> = ({help, ...rest}) => (
	<React.Fragment>
		<div className="dropzone-block" id="myDropzone">
			<span>Выберите файл </span>
			или перетащите его сюда
			<input
				{...rest}
				type="file"
				style={{
					position: 'absolute',
					width: '100%',
					height: '100%',
					opacity: 0,
				}}/>
		</div>
		{
			help && <div className="form__group-text">
				{help}
      </div>
		}
	</React.Fragment>
);

export default DropField;

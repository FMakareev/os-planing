import * as React from 'react';
import {TextField} from '../../../../Components/TextField/TextField';
import {TagField} from '../../../../Components/TagField/TagField';
import DropFieldHoc from "../../../../Components/DropFieldHOC/DropFieldHOC";
import DropFieldWithFileList from "../../../../Components/DropFieldWithFileList/DropFieldWithFileList";

interface IFormProjectEditorProps {
	[prop: string]: any
}

const DropFieldWithHOC = DropFieldHoc(DropFieldWithFileList)();


export const FormProjectEditor: React.FC<IFormProjectEditorProps> = () => (
	<form className="form">
		<TextField
			type="text"
			placeholder="Placeholder"
			label={'Название'}
			help={'Текстовая подсказка'}
			name={'name'}
		/>
		<TextField
			type="text"
			placeholder="Placeholder"
			label={'Город'}
			help={'Текстовая подсказка'}
			name={'city'}
		/>
		<div className="form__category">
			<TagField/>
		</div>
		<TextField
			as={'textarea'}
			type="text"
			placeholder="Placeholder"
			label={'Город'}
			help={'Текстовая подсказка'}
			name={'city'}
		/>


		<DropFieldWithHOC/>

	</form>
);

export default FormProjectEditor;

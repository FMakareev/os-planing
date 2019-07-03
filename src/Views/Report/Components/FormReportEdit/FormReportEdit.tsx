import * as React from 'react';
import {TextField} from "../../../../Components/TextField/TextField";
import DropFieldWithFileList from '../../../../Components/DropFieldWithFileList/DropFieldWithFileList';
import DropFieldHoc from "../../../../Components/DropFieldHOC/DropFieldHOC";


const DropFieldWithHOC = DropFieldHoc(DropFieldWithFileList)();

interface IFormReportEditProps {
	[prop: string]: any
}

export const FormReportEdit: React.FC<IFormReportEditProps> = () => (
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
		<TextField
			as={'textarea'}
			type="text"
			placeholder="Placeholder"
			label={'Город'}
			help={'Текстовая подсказка'}
			name={'city'}
		/>


		<DropFieldWithHOC
			help={'Текстовая подсказка'}
		/>

	</form>
);

export default FormReportEdit;

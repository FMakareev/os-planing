import * as React from 'react';
import DiskIcon from '../../../../Assets/img/spritesvg/disket.svg';
import Button, {ButtonStyleEnum} from "../../../../Components/Button/Button";

interface IProjectEditorSidebarProps {
	[prop: string]: any
}

export const ProjectEditorSidebar: React.FC<IProjectEditorSidebarProps> = () => (
	<div className="inner-info">
		<div className="inner__date">5 мая 2019</div>
		<Button style={ButtonStyleEnum.icon}>
			<img src={DiskIcon} className="icon icon-disket "/>
			Сохранить отчет
		</Button>
		<div className="draft">
			Черновик автоматически сохранен <span>06.05.2019 в 16:04</span>
		</div>
	</div>
);

export default ProjectEditorSidebar;

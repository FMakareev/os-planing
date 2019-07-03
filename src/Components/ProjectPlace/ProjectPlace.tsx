import * as React from 'react';
import PlaceIcon from "../../Assets/img/spritesvg/place.svg";

interface IProjectPlaceProps {
	[prop: string]: any
}

export const ProjectPlace: React.FC<IProjectPlaceProps> = ({children}) => (
	<div className="project-place">
		<img src={PlaceIcon} className="icon icon-place "/>
		{children}
	</div>
);

export default ProjectPlace;

import * as React from 'react';
import PlaceIcon from "../../Assets/img/spritesvg/place.svg";
import classNames from 'classnames';

interface IProjectPlaceProps {
  iconClassName?: string;

  [prop: string]: any
}

export const ProjectPlace: React.FC<IProjectPlaceProps> = ({children, iconClassName}) => (
  <div className="project-place">
    <img src={PlaceIcon} className={classNames("icon", iconClassName, {
      'icon-place': !iconClassName
    })}/>
    {children}
  </div>
);

export default ProjectPlace;

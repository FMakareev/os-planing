import * as React from 'react';
import DiskIcon from '../../../../Assets/img/spritesvg/disket.svg';
import Button, {ButtonStyleEnum} from "../../../../Components/Button/Button";
import {EventDateFormat} from "../../Helpers/EventDateFormat";

interface IProjectEditorSidebarProps {
  buttonLabel?: string;
  date?: string;
  onClick?: any;

  [prop: string]: any
}

export const ProjectEditorSidebar: React.FC<IProjectEditorSidebarProps> = ({
                                                                             buttonLabel = 'Сохранить',
                                                                             onClick,
                                                                             date,
                                                                           }) => (
  <div className="inner-info">
    <div className="inner__date">{date && EventDateFormat(date)}</div>
    <Button onClick={onClick && onClick} style={ButtonStyleEnum.icon}>
      <img src={DiskIcon} className="icon icon-disket "/>
      {buttonLabel}
    </Button>
  </div>
);

export default ProjectEditorSidebar;

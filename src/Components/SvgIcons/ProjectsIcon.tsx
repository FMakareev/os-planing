import * as React from 'react';
import {ISvgIcon} from "./interfaces";

interface IProjectsIconProps extends ISvgIcon  {
  [prop: string]: any
}

const ProjectsIcon: React.FC<IProjectsIconProps> = ({className, height, width}) => {
  return (
    <svg width={width} height={height} className={className} viewBox="0 0 16 16" fill="inherit" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd"
            d="M15 0H6C5.4475 0 5 0.4475 5 1V5H1C0.4475 5 0 5.4475 0 6V15C0 15.5525 0.4475 16 1 16H10C10.5525 16 11 15.5525 11 15V11H15C15.5525 11 16 10.5525 16 10V1C16 0.4475 15.5525 0 15 0ZM9 13.5C9 13.776 8.776 14 8.5 14H2.5C2.224 14 2 13.776 2 13.5V7.5C2 7.224 2.224 7 2.5 7H8.5C8.776 7 9 7.224 9 7.5V13.5ZM14 8.5C14 8.776 13.776 9 13.5 9H11V6C11 5.4475 10.5525 5 10 5H7V2.5C7 2.224 7.224 2 7.5 2H13.5C13.776 2 14 2.224 14 2.5V8.5Z"
            fill="inherit"/>
    </svg>

  );
};

export default ProjectsIcon;
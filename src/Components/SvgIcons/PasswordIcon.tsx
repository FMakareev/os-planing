import * as React from 'react';
import {ISvgIcon} from "./interfaces";

interface IPasswordIconProps extends ISvgIcon {
  [prop: string]: any
}

const PasswordIcon: React.FC<IPasswordIconProps> = ({className, width, height}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      className={className}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd"
            d="M3 5C3 2.23858 5.23858 0 8 0C10.7614 0 13 2.23858 13 5V7C14.1046 7 15 7.89543 15 9V14C15 15.1046 14.1046 16 13 16H3C1.89543 16 1 15.1046 1 14V9C1 7.89543 1.89543 7 3 7V5ZM5 7H11V5C11 3.34315 9.65685 2 8 2C6.34315 2 5 3.34315 5 5V7ZM3 14V9H13V14H3Z"
            fill="inherit"/>
    </svg>

  );
};

export default PasswordIcon;
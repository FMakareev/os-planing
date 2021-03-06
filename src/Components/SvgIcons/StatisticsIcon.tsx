import * as React from 'react';
import {ISvgIcon} from "./interfaces";

interface IStatisticsIconProps extends ISvgIcon {

  [prop: string]: any
}

const StatisticsIcon: React.FC<IStatisticsIconProps> = ({
  width,
  height,
  className
                                                        }) => {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 16 16" fill="inherit" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 0C1.55228 0 2 0.447715 2 1V14H15C15.5523 14 16 14.4477 16 15C16 15.5523 15.5523 16 15 16H1C0.447715 16 0 15.5523 0 15V1C0 0.447715 0.447715 0 1 0Z" fill="inherit"/>
      <path d="M5 6C5.55228 6 6 6.44772 6 7V11C6 11.5523 5.55228 12 5 12C4.44772 12 4 11.5523 4 11V7C4 6.44772 4.44772 6 5 6Z" fill="inherit"/>
      <path d="M9 3C9.55229 3 10 3.44772 10 4V11C10 11.5523 9.55229 12 9 12C8.44771 12 8 11.5523 8 11V4C8 3.44772 8.44771 3 9 3Z" fill="inherit"/>
      <path d="M14 9C14 8.44771 13.5523 8 13 8C12.4477 8 12 8.44771 12 9V11C12 11.5523 12.4477 12 13 12C13.5523 12 14 11.5523 14 11V9Z" fill="inherit"/>
    </svg>

  );
};

export default StatisticsIcon;
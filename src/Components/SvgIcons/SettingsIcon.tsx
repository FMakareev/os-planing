import * as React from 'react';
import {ISvgIcon} from "./interfaces";

interface ISettingsIconProps extends ISvgIcon{
    [prop:string]: any
}

const SettingsIcon: React.FC<ISettingsIconProps> = ({width,height,className}) => {
     return (
       <svg width={width} height={height} viewBox="0 0 16 16" fill="inherit" className={className} xmlns="http://www.w3.org/2000/svg">
         <path
           fillRule="evenodd"
           clipRule="evenodd"
           d="M2.17071 5C2.58254 6.16519 3.69378 7 5 7C6.31133 7 7.42615 6.15864 7.8341 4.9863C7.88806 4.99531 7.94348 5 8 5H15C15.5523 5 16 4.55228 16 4C16 3.44772 15.5523 3 15 3H8C7.94348 3 7.88806 3.00469 7.8341 3.0137C7.42615 1.84136 6.31133 1 5 1C3.69378 1 2.58254 1.83481 2.17071 3H1C0.447715 3 0 3.44772 0 4C0 4.55228 0.447715 5 1 5H2.17071ZM6 4C6 4.55228 5.55228 5 5 5C4.44772 5 4 4.55228 4 4C4 3.44772 4.44772 3 5 3C5.55228 3 6 3.44772 6 4Z"
           fill="inherit"/>
         <path
           fillRule="evenodd"
           clipRule="evenodd"
           d="M13.8293 11C13.4175 9.83481 12.3062 9 11 9C9.68867 9 8.57384 9.84136 8.1659 11.0137C8.11194 11.0047 8.05652 11 8 11H1C0.447715 11 0 11.4477 0 12C0 12.5523 0.447715 13 1 13H8C8.05652 13 8.11194 12.9953 8.1659 12.9863C8.57384 14.1586 9.68867 15 11 15C12.3062 15 13.4175 14.1652 13.8293 13H15C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11H13.8293ZM12 12C12 12.5523 11.5523 13 11 13C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11C11.5523 11 12 11.4477 12 12Z"
           fill="inherit"/>
       </svg>

     );
};

export default SettingsIcon;
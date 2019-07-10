import * as React from 'react';
import {ISvgIcon} from "./interfaces";

interface IMonthReportIconProps extends ISvgIcon{
    [prop:string]: any
}

const MonthReportIcon: React.FC<IMonthReportIconProps> = () => {
     return (
       <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M5 5C4.44772 5 4 5.44772 4 6C4 6.55228 4.44772 7 5 7H13C13.5523 7 14 6.55228 14 6C14 5.44772 13.5523 5 13 5H5Z" fill="#8288A2"/>
         <path d="M4 10C4 9.44772 4.44772 9 5 9H13C13.5523 9 14 9.44772 14 10C14 10.5523 13.5523 11 13 11H5C4.44772 11 4 10.5523 4 10Z" fill="#8288A2"/>
         <path d="M5 13C4.44772 13 4 13.4477 4 14C4 14.5523 4.44772 15 5 15H9C9.55228 15 10 14.5523 10 14C10 13.4477 9.55228 13 9 13H5Z" fill="#8288A2"/>
         <path fillRule="evenodd" clipRule="evenodd" d="M0 3C0 1.34315 1.34315 0 3 0H15C16.6569 0 18 1.34315 18 3V17C18 18.6569 16.6569 20 15 20H3C1.34315 20 0 18.6569 0 17V3ZM3 2H15C15.5523 2 16 2.44772 16 3V17C16 17.5523 15.5523 18 15 18H3C2.44772 18 2 17.5523 2 17V3C2 2.44772 2.44771 2 3 2Z"
               fill="#8288A2"/>
       </svg>

     );
};

export default MonthReportIcon;
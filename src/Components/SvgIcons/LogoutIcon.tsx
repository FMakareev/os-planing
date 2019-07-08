import * as React from 'react';
import {ISvgIcon} from "./interfaces";

interface ILogoutIconProps  extends ISvgIcon {
    [prop:string]: any
}

const LogoutIcon: React.FC<ILogoutIconProps> = ({className, width, height}) => {
     return (
       <svg width={width} height={height} viewBox="0 0 16 16" className={className} fill="inherit" xmlns="http://www.w3.org/2000/svg">
         <g clipPath="url(#clip0)">
           <path fillRule="evenodd" clipRule="evenodd" d="M13 14C13.2652 14 13.5196 13.8946 13.7071 13.7071C13.8946 13.5196 14 13.2652 14 13L14 3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2L10 2C9.44771 2 9 1.55228 9 1C9 0.447716 9.44771 3.10551e-07 10 2.62268e-07L13 0C13.7956 -6.95579e-08 14.5587 0.31607 15.1213 0.878679C15.6839 1.44129 16 2.20435 16 3L16 13C16 13.7956 15.6839 14.5587 15.1213 15.1213C14.5587 15.6839 13.7957 16 13 16H10C9.44772 16 9 15.5523 9 15C9 14.4477 9.44772 14 10 14H13Z" fill="inherit"/>
           <path fillRule="evenodd" clipRule="evenodd" d="M4.70711 11.7071C4.31658 12.0976 3.68342 12.0976 3.29289 11.7071L0.292893 8.70711C-0.0976311 8.31658 -0.0976311 7.68342 0.292893 7.29289L3.29289 4.29289C3.68342 3.90237 4.31658 3.90237 4.70711 4.29289C5.09763 4.68342 5.09763 5.31658 4.70711 5.70711L2.41421 8L4.70711 10.2929C5.09763 10.6834 5.09763 11.3166 4.70711 11.7071Z" fill="inherit"/>
           <path fillRule="evenodd" clipRule="evenodd" d="M11 8C11 8.55228 10.5523 9 10 9L1 9C0.447715 9 4.0591e-07 8.55229 3.57628e-07 8C3.09346e-07 7.44771 0.447715 7 1 7L10 7C10.5523 7 11 7.44771 11 8Z" fill="inherit"/>
         </g>
         <defs>
           <clipPath id="clip0">
             <rect width="16" height="16" fill="white" transform="translate(16 16) rotate(180)"/>
           </clipPath>
         </defs>
       </svg>

     );
};

export default LogoutIcon;
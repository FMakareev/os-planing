import * as React from 'react';
import {ISvgIcon} from "./interfaces";

interface IUsersIconProps extends ISvgIcon {
  [prop: string]: any
}

const UsersIcon: React.FC<IUsersIconProps> = ({width, height, className}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" className={className} fill="inherit"
         xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd"
            d="M12.7145 6.65349C12.896 6.1355 13 5.5805 13 5C13 2.23851 10.7615 0 8 0C5.23851 0 3 2.23851 3 5C3 5.5805 3.104 6.1355 3.28599 6.65349C1.33749 7.6445 0 9.66301 0 11.9985V14.9985C0 15.5515 0.448497 16 1.00149 16H14.9985C15.5515 16 16 15.5515 16 14.9985V11.9985C16 9.66301 14.6625 7.6445 12.7145 6.65349ZM8 2C9.65399 2 11 3.34599 11 5C11 6.65399 9.65399 8 8 8C6.34599 8 5 6.65399 5 5C5 3.34599 6.34599 2 8 2ZM14 14H2V11.9985C2 10.394 2.952 9.01101 4.31851 8.37501C5.2325 9.3715 6.54149 10 8 10C9.45851 10 10.7675 9.3715 11.6815 8.37501C13.048 9.0115 14 10.3945 14 11.9985V14Z"
            fill="inherit"/>
    </svg>
  );
};

export default UsersIcon;
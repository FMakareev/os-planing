import * as React from 'react';
import {ISvgIcon} from "./interfaces";

interface ICalendarIconProps extends ISvgIcon {
  [prop: string]: any
}

const CalendarIcon: React.FC<ICalendarIconProps> = ({
                                                      width,
                                                      height,
                                                      className
                                                    }) => {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 16 16" fill="inherit"
         xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 10H9V6.5C9 6.224 8.776 6 8.5 6H5.5C5.224 6 5 6.224 5 6.5V7.5C5 7.776 5.224 8 5.5 8H7V10H5.5C5.224 10 5 10.224 5 10.5V11.5C5 11.776 5.224 12 5.5 12H10.5C10.776 12 11 11.776 11 11.5V10.5C11 10.224 10.776 10 10.5 10ZM15 0H1C0.447503 0 0 0.447503 0 1V15C0 15.5525 0.447503 16 1 16H15C15.5525 16 16 15.5525 16 15V1C16 0.447503 15.5525 0 15 0ZM14 13.5C14 13.776 13.776 14 13.5 14H2.5C2.224 14 2 13.776 2 13.5V4.5C2 4.224 2.224 4 2.5 4H13.5C13.776 4 14 4.224 14 4.5V13.5Z"
        fill="inherit"/>
    </svg>
  );
};

export default CalendarIcon;
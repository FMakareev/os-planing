import * as React from 'react';
import {EventDateFormat} from "../../Helpers/EventDateFormat";
import {Breadcrumbs} from "../../../../Components/Breadcrumbs/Breadcrumbs";

interface IEventBreadcrumbsProps {
  city?: string;
  [prop: string]: any
}

const GetCalendarLink = (date: string) => {
  const dateInst = new Date(date);
  return `/?year=${dateInst.getFullYear()}&month=${dateInst.getMonth()}`
};

const EventBreadcrumbs: React.FC<IEventBreadcrumbsProps> = ({date, city}) => {
  return (
    <Breadcrumbs history={[
      {
        name: 'Календарь',
        to: '/'
      },
      {
        name: date && EventDateFormat(date),
        to: date && GetCalendarLink(date),
      },
      {
        name: city || '',
        to: ``
      },
    ]}/>
  );
};

export default EventBreadcrumbs;
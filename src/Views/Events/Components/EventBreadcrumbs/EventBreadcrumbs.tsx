import * as React from 'react';
import {EventDateFormat} from "../../Helpers/EventDateFormat";
import {Breadcrumbs} from "../../../../Components/Breadcrumbs/Breadcrumbs";

interface IEventBreadcrumbsProps {
  reception?: {
    city: string;
    id?: string;
  };
  history?: any[];

  [prop: string]: any
}

const GetCalendarLink = (date: string, query?: string) => {
  const dateInst = new Date(date);
  return `/?year=${dateInst.getFullYear()}&month=${dateInst.getMonth()}${query}`
};

const EventBreadcrumbs: React.FC<IEventBreadcrumbsProps> = ({date, reception, history}) => {
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
        name: reception && reception.city || '',
        to: date && GetCalendarLink(date, `&reception=${reception && reception.id}`)
      },
      ...(history ? history : []),
    ]}/>
  );
};

export default EventBreadcrumbs;
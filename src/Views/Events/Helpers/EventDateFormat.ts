import {format} from "date-fns";
import ru from "date-fns/locale/ru";


export const EventDateFormat = (date: string) => {
  return format(
    new Date(date),
    'd MMMM yyyy',
    {
      locale: ru
    }
  )
};
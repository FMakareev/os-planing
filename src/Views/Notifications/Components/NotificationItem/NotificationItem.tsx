import * as React from 'react';
import NotificationWrapper from "../../../../Components/NotificationWrapper/NotificationWrapper";
import classNames from 'classnames';
import {UserAvatar} from "../../../../Components/UserAvatar/UserAvatar";
import {Link} from 'react-router-dom';
import {INotification, NotificationTypeEnum} from "../../../../Apollo/schema";
import {EventDateFormat} from "../../../Events/Helpers/EventDateFormat";


interface INotificationItemProps extends INotification {
  [prop: string]: any
}


const GetNotificationContent = ({type, report,monthReport, event, created}: INotification) => {

  if (type === NotificationTypeEnum.NOTIFICATION_TYPE_APPROVED_MONTH_REPORT) {
    // TODO: добавить дату месячного отчета и ссылку на страницу отчета
    return (<React.Fragment>
      <div className="notifications-item__text">
        Одобрен месячный отчет за {monthReport && monthReport.date && EventDateFormat(monthReport.date)}.
      </div>
      {
        monthReport && <Link to={`/month-report/${monthReport && monthReport.id}`} className="notifications-item__more">
            Перейти к отчету
        </Link>
      }
    </React.Fragment>)
  }
  if (type === NotificationTypeEnum.NOTIFICATION_TYPE_APPROVED_REPORT) {
    return (<React.Fragment>
      <div className="notifications-item__text">
        Одобрен отчет мероприятия "{event && event.title}"
      </div>
      {
        event && <Link to={`/report/${event && event.id}/${event && event.report}`} className="notifications-item__more">
            Перейти к отчету
        </Link>
      }
    </React.Fragment>)
  }
  if (type === NotificationTypeEnum.NOTIFICATION_TYPE_CREATE_EVENT) {
    return (<React.Fragment>
      <div className="notifications-item__text">
        Создано мероприятие "{event && event.title}"
      </div>
      {
        event && <Link to={`/event/${event.id}`} className="notifications-item__more">
            Перейти к мероприятию
        </Link>
      }
    </React.Fragment>)
  }
  if (type === NotificationTypeEnum.NOTIFICATION_TYPE_UPDATE_EVENT) {
    return (<React.Fragment>
      <div className="notifications-item__text">
        Обновлено мероприятие "{event && event.title}"
      </div>
      {
        event && <Link to={`/event/${event.id}`} className="notifications-item__more">
            Перейти к мероприятию
        </Link>
      }
    </React.Fragment>)
  }
  if (type === NotificationTypeEnum.NOTIFICATION_TYPE_DELETE_EVENT) {
    return (<div className="notifications-item__text">
      Удалено мероприятие "{event.title}"
    </div>)
  }
  if (type === NotificationTypeEnum.NOTIFICATION_TYPE_QUERY_GET_REPORT) {
    return (<React.Fragment>
      <div className="notifications-item__text">
        Ожидает отчета по проекту "{event && event.title}"
      </div>
      {
        event && event.report && <Link to={`/report/${event.id}/${event.report}`} className="notifications-item__more">
            Перейти к отчету
        </Link>
      }
      {
        event && !event.report && <Link to={`/report/create/${event.id}`} className="notifications-item__more">
            Перейти к отчету
        </Link>
      }
    </React.Fragment>)
  }
  if (type === NotificationTypeEnum.NOTIFICATION_TYPE_QUERY_SAVE_REPORT) {
    // TODO: данный тип отчета нужно семантически переделать на только отчеты оп событиям и подобный тип сделатьотдельный на месячные отчеты
    return (<React.Fragment>
      <div className="notifications-item__text">
        {
          !monthReport && <span>
            Сохранен отчет мероприятия "{report && report.event.title}"
          </span>
        }

      </div>
      {
        report && report.event && <Link to={`/report/${report.event.id}/${report.id}`} className="notifications-item__more">
            Перейти к отчету
        </Link>
      }
    </React.Fragment>)
  }


  if (type === NotificationTypeEnum.NOTIFICATION_TYPE_QUERY_GET_MONTH_REPORT) {
    return (<React.Fragment>
      <div className="notifications-item__text">
        Ожидание месячного отчета от {monthReport && monthReport.date && EventDateFormat(monthReport.date)}.
      </div>
      {
        monthReport && <Link to={`/month-report/${monthReport.id}`} className="notifications-item__more">
            Перейти к отчету
        </Link>
      }
      {
        !monthReport && <Link to={`/month-report/create/${created && EventDateFormat(created)}`} className="notifications-item__more">
            Перейти к отчету
        </Link>
      }
    </React.Fragment>)
  }
  if(type === NotificationTypeEnum.NOTIFICATION_TYPE_QUERY_SAVE_MONTH_REPORT){
    return (<React.Fragment>
      <div className="notifications-item__text">
        {
          monthReport && <span>
            Создан месячный отчет от {monthReport.date && EventDateFormat(monthReport.date)}
          </span>
        }

      </div>
      {
        monthReport &&<Link to={`/month-report/${monthReport.id}`} className="notifications-item__more">
            Перейти к отчету
        </Link>
      }
    </React.Fragment>)
  }
  if(type === NotificationTypeEnum.NOTIFICATION_TYPE_QUERY_UPDATE_MONTH_REPORT){
    return (<React.Fragment>
      <div className="notifications-item__text">
        {
          monthReport && <span>
            Сохранен месячный отчет от {monthReport.date && EventDateFormat(monthReport.date)}
          </span>
        }

      </div>
      {
        monthReport &&<Link to={`/month-report/${monthReport.id}`} className="notifications-item__more">
            Перейти к отчету
        </Link>
      }
    </React.Fragment>)
  }


  return null;

}


export const NotificationItem: React.FC<INotificationItemProps> = (prop) => {
  const {fromUser, to, report, created, message, isRead} = prop;
  return (
    <NotificationWrapper>
      <div
        className={classNames('notifications-item__new ',
          {
            "active": !isRead,
          })}/>

      <div className="notifications-item__top">
        <UserAvatar avatar={fromUser && fromUser.avatar && fromUser.avatar.url} mods={'notifications-item__user-ava'}/>
        {
          fromUser &&
          <div className="notifications-item__info">
              <div className="notifications-item__name">
                {fromUser.fullName}
              </div>
              <div className="notifications-item__mail">
                {fromUser.email}
              </div>
          </div>
        }
        <div className="notifications-item__date">
          {created && EventDateFormat(created)}
        </div>
      </div>

      {
        GetNotificationContent(prop)
      }

    </NotificationWrapper>
  );
}

export default NotificationItem;


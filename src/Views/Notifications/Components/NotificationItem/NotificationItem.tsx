import * as React from 'react';
import NotificationWrapper from "../../../../Components/NotificationWrapper/NotificationWrapper";
import classNames from 'classnames';
import {UserAvatar} from "../../../../Components/UserAvatar/UserAvatar";
import {Link} from 'react-router-dom';
import {INotification, NotificationTypeEnum} from "../../../../Apollo/schema";


interface INotificationItemProps extends INotification {
  [prop: string]: any
}


const GetNotificationContent = ({type, report,monthReport, event}: INotification) => {

  if (type === NotificationTypeEnum.NOTIFICATION_TYPE_APPROVED_MONTH_REPORT) {
    // TODO: добавить дату месячного отчета и ссылку на страницу отчета
    return (<React.Fragment>
      <div className="notifications-item__text">
        Одобрен месячный отчет за
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
        Одобрен отчет проекта "{report && report.event.title}"
      </div>
      {
        report && <Link to={`/report/${report.event.id}/${report.id}`} className="notifications-item__more">
            Перейти к отчету
        </Link>
      }
    </React.Fragment>)
  }
  if (type === NotificationTypeEnum.NOTIFICATION_TYPE_CREATE_EVENT) {
    return (<React.Fragment>
      <div className="notifications-item__text">
        Создано новое мероприятие "${event && event.title}"
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
      Удалено мероприятие "${event.title}"
    </div>)
  }
  if (type === NotificationTypeEnum.NOTIFICATION_TYPE_QUERY_GET_MONTH_REPORT) {
    // TODO: не хватает даты отчета
    return (<React.Fragment>
      <div className="notifications-item__text">
        Ожидание месячного отчета.
      </div>
      {
        monthReport && <Link to={`/month-report/${monthReport.id}`} className="notifications-item__more">
            Перейти к отчету
        </Link>
      }
      {
        !monthReport && <Link to={`/month-report/create/`} className="notifications-item__more">
            Перейти к отчету
        </Link>
      }
    </React.Fragment>)
  }
  if (type === NotificationTypeEnum.NOTIFICATION_TYPE_QUERY_GET_REPORT) {
    return (<React.Fragment>
      <div className="notifications-item__text">
        Ожидает отчета по проекту "{event && event.title}"
      </div>
      {
        report && event && <Link to={`/report/${event.id}/${report.id}`} className="notifications-item__more">
            Перейти к отчету
        </Link>
      }
    </React.Fragment>)
  }
  if (type === NotificationTypeEnum.NOTIFICATION_TYPE_QUERY_SAVE_REPORT) {
    // TODO: данный тип отчета нужно семантически переделать на только отчеты оп событиям и подобный тип сделатьотдельный на месячные отчеты
    return (<React.Fragment>
      <div className="notifications-item__text">
        Изменен отчет
      </div>
      {
        report && event &&<Link to={`/report/${event.id}/${report.id}`} className="notifications-item__more">
            Перейти к отчету
        </Link>
      }
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
  const {fromUser, to, report, createAt, message, isRead} = prop;
  return (
    <NotificationWrapper>
      <div
        className={classNames('notifications-item__new ',
          {
            "active": !isRead,
          })}/>

      <div className="notifications-item__top">
        <UserAvatar avatar={fromUser && fromUser.avatar} mods={'notifications-item__user-ava'}/>
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
          {createAt}
        </div>
      </div>

      {
        GetNotificationContent(prop)
      }

    </NotificationWrapper>
  );
}

export default NotificationItem;

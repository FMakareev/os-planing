import * as React from 'react';
import {PageTitle} from "../../../../Components/PageTitle/PageTitle";
import {TagList} from "../../../../Components/TagList/TagList";
import ProjectPlace from "../../../../Components/ProjectPlace/ProjectPlace";
import ReportContentCell from "../../../../Components/ReportContentCell/ReportContentCell";
import EventBreadcrumbs from "../../../Events/Components/EventBreadcrumbs/EventBreadcrumbs";
import {IEvent, IMassMedia, IReport} from "../../../../Apollo/schema";
import MassMediaItem from "../MassMediaItem/MassMediaItem";

interface IReportItemContentProps extends IReport {
  event: IEvent;

  [prop: string]: any
}

export const ReportItemContent: React.FC<IReportItemContentProps> = ({
                                                                       date,
                                                                       id,
                                                                       task,
                                                                       producer,
                                                                       goals,
                                                                       participantsCount,
                                                                       participantsAbout,
                                                                       about,
                                                                       massMedia,
                                                                       event
                                                                     }) => (
  <React.Fragment>
    <EventBreadcrumbs
      date={date}
      city={event.reception.city}
    />

    <PageTitle>
      {event.title}
    </PageTitle>
    <div className="inner__content">
      <ProjectPlace>
        {event.reception.city}
      </ProjectPlace>
      <TagList/>

      <h2 className="h2">
        Отчет:
      </h2>

      <ReportContentCell
        label={'Задача (зачем было проведено мероприятие)'}
        content={task}
      />

      <ReportContentCell
        label={'Кто поставил задачу (ФИО, место работы)'}
        content={producer}
      />

      <ReportContentCell
        label={'Цели мероприятия'}
        content={goals}
      />

      <ReportContentCell
        label={'Количество участников, присутствовавших на мероприятии'}
        content={participantsCount}
      />

      <ReportContentCell
        label={'ФИО основных участников'}
        content={participantsAbout}
      />

      <ReportContentCell
        label={'писание мероприятия'}
        content={about}
      />

      {
        massMedia && massMedia.map((item: IMassMedia, idx: number) => (<MassMediaItem key={idx} {...item}/>))
      }


    </div>
  </React.Fragment>
);

export default ReportItemContent;

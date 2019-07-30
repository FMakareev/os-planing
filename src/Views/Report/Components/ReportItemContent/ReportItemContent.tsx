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
  place,
                                                                       task,
                                                                       producer,
                                                                       goals,
                                                                       participantsCount,
                                                                       participantsAbout,
                                                                       treatmentInTheReception,
                                                                       about,
                                                                       massMedia,
                                                                       event
                                                                     }) => {
  return (
    <React.Fragment>
      <EventBreadcrumbs
        date={event.date}
        reception={event && event.reception}
        history={[
          {
            name: event && event.title,
            to: `/event/${event && event.id}`,
          },
          {
            name: 'Отчет',
            to: `/report/${event && event.id}/${event && event.report}`,
          },
        ]}
      />

      <PageTitle>
        {event.title}
      </PageTitle>
      <div className="inner__content">
        <ProjectPlace>
          {place}
        </ProjectPlace>
        <TagList projects={event.projects}/>

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
          label={'Количество встреч с гражданами (обращения в приемную)'}
          content={treatmentInTheReception}
        />

        <ReportContentCell
          label={'писание мероприятия'}
          content={about}
        />



        <h2 className="h2">
          Ссылки на СМИ о мероприятиях
        </h2>

        {
          massMedia && massMedia.map((item: IMassMedia, idx: number) => (<MassMediaItem key={idx} {...item}/>))
        }


      </div>
    </React.Fragment>
  );
}

export default ReportItemContent;

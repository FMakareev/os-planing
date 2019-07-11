import * as React from 'react';
import {PageTitle} from "../../../../Components/PageTitle/PageTitle";
import {TagList} from "../../../../Components/TagList/TagList";
import ProjectPlace from "../../../../Components/ProjectPlace/ProjectPlace";
import ReportContentCell from "../../../../Components/ReportContentCell/ReportContentCell";
import EventBreadcrumbs from "../../../Events/Components/EventBreadcrumbs/EventBreadcrumbs";
import {IMassMedia, IReport} from "../../../../Apollo/schema";
import MassMediaItem from "../MassMediaItem/MassMediaItem";

interface IReportItemContentProps extends IReport {
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
                                                                     }) => (
  <React.Fragment>
    <EventBreadcrumbs
      date={date}
      id={id}
    />

    <PageTitle>
      Проект модернизации театра юного зрителя по адресу ул. Петропавловская, д. 54
    </PageTitle>
    <div className="inner__content">
      <ProjectPlace>
        Зеленогорск
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
        massMedia && massMedia.map((item: IMassMedia, idx: number) => (<MassMediaItem {...item}/>))
      }


    </div>
  </React.Fragment>
);

export default ReportItemContent;

import * as React from 'react';
import {PageTitle} from "../../../../Components/PageTitle/PageTitle";
import {ReportContentCell} from "../../../../Components/ReportContentCell/ReportContentCell";
import ProjectPlace from "../../../../Components/ProjectPlace/ProjectPlace";
import ReceptionActivitiesReport from '../ReceptionActivitiesReport/ReceptionActivitiesReport';
import {IMonthReport} from '../../../../Apollo/Types/MonthReport';
import {IMassMedia} from '../../../../Apollo/schema';
import MassMediaItem from "../../../Report/Components/MassMediaItem/MassMediaItem";
import EventBreadcrumbs from "../../../Events/Components/EventBreadcrumbs/EventBreadcrumbs";
import DateIcon from '../../../../Assets/img/date.svg';
import {CalendarDateFormat} from "../../../Calendar/Components/CalendarDayCardTitle/CalendarDayCardTitle";


interface IReportItemContentProps extends IMonthReport {

  [prop: string]: any
}

// TODO: передать корректную дату в хлебные крошки, 5 число какого-то месяца
export const MonthReportItemContent: React.FC<IReportItemContentProps> = ({
                                                                            date,
                                                                            id,
                                                                            reception,
                                                                            massMedia,
                                                                            numberOfEvents,
                                                                            numberOfEventsRequiringReport,
                                                                            numberOfParticipantsPresentAtRequiringReport,
                                                                            numberOfEventsNotRequiringReport,
                                                                            treatmentInTheReception,
                                                                            currentActivity,
                                                                            receptionAchievement,
                                                                            mainProblems,
                                                                            descriptionOfTheMainProblemTopics,
                                                                            expectedNegativeEvents,
                                                                            whatProblemsWereSolved,
                                                                            keyConflictResolution,
                                                                          }) => (
  <React.Fragment>
    <EventBreadcrumbs
      date={date}
      city={reception && reception.city}
      id={id}
    />

    <PageTitle>
      Ежемесячный отчет о работе приемной {reception && reception.city}
    </PageTitle>
    <div className="inner__content">
      <ProjectPlace icon={DateIcon}>
        {date && CalendarDateFormat(date)}
      </ProjectPlace>


      <ReceptionActivitiesReport
        numberOfEvents={numberOfEvents}
        numberOfEventsRequiringReport={numberOfEventsRequiringReport}
        numberOfParticipantsPresentAtRequiringReport={numberOfParticipantsPresentAtRequiringReport}
        numberOfEventsNotRequiringReport={numberOfEventsNotRequiringReport}
        treatmentInTheReception={treatmentInTheReception}
      />

      <div className="br"/>

      <ReportContentCell
        label={'Описание отчетного периода: текущая деятельность приемной'}
        content={currentActivity}
      />

      <ReportContentCell
        label={'Описание отчетного периода: значимые итоги/достижения деятельности приемной'}
        content={receptionAchievement}
      />

      <ReportContentCell
        label={'Описание отчетного периода: основные проблемы, с которыми столкнулись сотрудники приемной при работе в отчетный период (взаимодействие с населением, руководством города/предприятия, бытовые)'}
        content={mainProblems}
      />

      <div className="br"/>

      <h2 className="h2">
        Отчет о территории
      </h2>

      <ReportContentCell
        label={'Описание основных проблемных тем в городе и на предпиятии за отчетный период'}
        content={descriptionOfTheMainProblemTopics}
      />

      <ReportContentCell
        label={'Ожидаемые отрицательные события в следующем за отчетным периодом месяце'}
        content={expectedNegativeEvents}
      />

      <ReportContentCell
        label={'Какие проблемы били решены в городе и на предпиятии за отчетный период'}
        content={whatProblemsWereSolved}
      />
      <ReportContentCell
        label={'Конфликты, недовольство, возмущения граждан. Ключевые решения.'}
        content={keyConflictResolution}
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

export default MonthReportItemContent;

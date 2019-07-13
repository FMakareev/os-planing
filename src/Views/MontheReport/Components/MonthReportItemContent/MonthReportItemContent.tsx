import * as React from 'react';
import {PageTitle} from "../../../../Components/PageTitle/PageTitle";
import {ReportContentCell} from "../../../../Components/ReportContentCell/ReportContentCell";
import ProjectPlace from "../../../../Components/ProjectPlace/ProjectPlace";
import ReceptionActivitiesReport from '../ReceptionActivitiesReport/ReceptionActivitiesReport';
import {IMassMedia, IMonthReport} from '../../../../Apollo/schema';
import EventBreadcrumbs from "../../Views/MonthReportEdit";
import MassMediaItem from "../../../Report/Components/MassMediaItem/MassMediaItem";

interface IReportItemContentProps extends IMonthReport{

  [prop: string]: any
}

export const MonthReportItemContent: React.FC<IReportItemContentProps> = ({date,
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
      id={id}
    />

    <PageTitle>
      Ежемесячный отчет о работе приемной {reception && reception.city}
    </PageTitle>
    <div className="inner__content">
      <ProjectPlace>
        {date}
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

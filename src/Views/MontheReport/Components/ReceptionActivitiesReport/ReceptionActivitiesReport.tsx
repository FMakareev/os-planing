import * as React from 'react';
import ReportContentCell from "../../../../Components/ReportContentCell/ReportContentCell";
import {IPrepareModel} from "../../../../Apollo/Types/MonthReport";

interface IReceptionActivitiesReportProps extends IPrepareModel {




  [prop: string]: any
}


const ReceptionActivitiesReport: React.FC<IReceptionActivitiesReportProps> = ({
                                                                                numberOfEvents,
                                                                                numberOfEventsRequiringReport,
                                                                                numberOfParticipantsPresentAtRequiringReport,
                                                                                numberOfEventsNotRequiringReport,
                                                                                treatmentInTheReception,
                                                                              }) => {
  return (
    <React.Fragment>
      <h2 className="h2">
        Отчет о деятельности приемной
      </h2>

      <div className={'row'}>
        <div className={'col-md-3'}>
          <ReportContentCell
            label={'Общее количество мероприятий за отчетный месяц'}
            content={numberOfEvents}
          />
        </div>
        <div className={'col-md-3'}>
          <ReportContentCell
            label={'Кол-во подотчетных мероприятий за отчетный период'}
            content={numberOfEventsRequiringReport}
          />
        </div>
        <div className={'col-md-3'}>
          <ReportContentCell
            label={'Количество участников, присутствовавших на подотчетных меропиятиях'}
            content={numberOfParticipantsPresentAtRequiringReport}
          />
        </div>
      </div>

      <div className={'row'}>
        <div className={'col-md-3'}>
          <ReportContentCell
            label={'Количество мероприятий не для выполнения основных поставленных задач'}
            content={numberOfEventsNotRequiringReport}
          />
        </div>
        <div className={'col-md-3'}>
          <ReportContentCell
            label={'Количество встреч с гражданами (обращения в приемную)'}
            content={treatmentInTheReception}
          />
        </div>
      </div>

    </React.Fragment>
  );
};

export default ReceptionActivitiesReport;
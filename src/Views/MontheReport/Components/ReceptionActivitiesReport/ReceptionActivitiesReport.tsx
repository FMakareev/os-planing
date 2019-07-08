import * as React from 'react';
import ReportContentCell from "../../../../Components/ReportContentCell/ReportContentCell";

interface IReceptionActivitiesReportProps {




  [prop: string]: any
}


const ReceptionActivitiesReport: React.FC<IReceptionActivitiesReportProps> = () => {
  return (
    <React.Fragment>
      <h2 className="h2">
        Отчет о деятельности приемной
      </h2>

      <div className={'row'}>
        <div className={'col-md-3'}>
          <ReportContentCell
            label={'Общее количество мероприятий за отчетный месяц'}
            content={'3'}
          />
        </div>
        <div className={'col-md-3'}>
          <ReportContentCell
            label={'Кол-во подотчетных мероприятий за отчетный период'}
            content={'2'}
          />
        </div>
        <div className={'col-md-3'}>
          <ReportContentCell
            label={'Количество участников, присутствовавших на подотчетных меропиятиях'}
            content={'2'}
          />
        </div>
      </div>

      <div className={'row'}>
        <div className={'col-md-3'}>
          <ReportContentCell
            label={'Количество мероприятий не для выполнения основных поставленных задач'}
            content={'2'}
          />
        </div>
        <div className={'col-md-3'}>
          <ReportContentCell
            label={'Количество встреч с гражданами (обращения в приемную)'}
            content={'2'}
          />
        </div>
      </div>

    </React.Fragment>
  );
};

export default ReceptionActivitiesReport;
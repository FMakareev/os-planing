import * as React from 'react';
import {ProjectEditorSidebar} from "../../../Events/Components/ProjectEditorSidebar/ProjectEditorSidebar";
import LayoutWithSidebar from "../../../../Containers/LayoutWithSidebar/LayoutWithSidebar";
import FormMonthReportEdit from '../../Components/FormMonthReportEdit/FormMonthReportEdit';
import PageTitle from "../../../../Components/PageTitle/PageTitle";
import ProjectPlace from '../../../../Components/ProjectPlace/ProjectPlace';
import {IMonthReport} from "../../../../Apollo/Types/MonthReport";
import EventBreadcrumbs from "../../../Events/Components/EventBreadcrumbs/EventBreadcrumbs";
import ExternalFinalFormSubmit from "../../../../Helpers/ExternalFinalFormSubmit";
import GetMonthReportEnhancer from "../../Enhancers/GetMonthReportEnhancer/GetMonthReportEnhancer";
import {CalendarDateFormat} from "../../../Calendar/Components/CalendarDayCardTitle/CalendarDayCardTitle";
import EditMonthReportEnhance from "../../Enhancers/EditMonthReportEnhance/EditMonthReportEnhance";
import DateIcon from '../../../../Assets/img/date.svg';

interface IMonthReportEditProps {
  monthReport: IMonthReport

  [prop: string]: any
}

const FormMonthReportEditEnhance = EditMonthReportEnhance(FormMonthReportEdit);

export const MonthReportEdit: React.FC<IMonthReportEditProps> = ({monthReport}) => {
  return (<LayoutWithSidebar
    sidebarContent={<ProjectEditorSidebar
      onClick={ExternalFinalFormSubmit('FormMonthReportEdit')}
      buttonLabel={'Сохранить отчет'}
    />}
  >
    <EventBreadcrumbs
      date={monthReport && monthReport.date}
      city={monthReport && monthReport.reception && monthReport.reception.city}
      id={monthReport && monthReport.id}
    />
    <PageTitle>
      Ежемесячный отчет о работе приемной {monthReport && monthReport.reception && monthReport.reception.city}
    </PageTitle>
    <div className="inner__content">

      <ProjectPlace icon={DateIcon}>
        {monthReport && monthReport.date && CalendarDateFormat(monthReport.date)}
      </ProjectPlace>

      <FormMonthReportEditEnhance
        initialValues={{
          ...monthReport,
          reception: monthReport.reception && monthReport.reception.id
        }}
      />
    </div>

  </LayoutWithSidebar>);
}

export default GetMonthReportEnhancer(MonthReportEdit);

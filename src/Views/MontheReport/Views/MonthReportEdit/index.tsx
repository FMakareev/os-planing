import * as React from 'react';
import {ProjectEditorSidebar} from "../../../Events/Components/ProjectEditorSidebar/ProjectEditorSidebar";
import LayoutWithSidebar from "../../../../Containers/LayoutWithSidebar/LayoutWithSidebar";
import FormMonthReportEdit from '../../Components/FormMonthReportEdit/FormMonthReportEdit';
import PageTitle from "../../../../Components/PageTitle/PageTitle";
import ProjectPlace from '../../../../Components/ProjectPlace/ProjectPlace';
import {TagList} from "../../../../Components/TagList/TagList";
import {IMonthReport} from "../../../../Apollo/schema";
import EventBreadcrumbs from "../../../Events/Components/EventBreadcrumbs/EventBreadcrumbs";
import ExternalFinalFormSubmit from "../../../../Helpers/ExternalFinalFormSubmit";

interface IMonthReportEditProps extends IMonthReport {
  [prop: string]: any
}



export const MonthReportEdit: React.FC<IMonthReportEditProps> = ({
                             date,
                             id,
                           }) => (<LayoutWithSidebar
  sidebarContent={<ProjectEditorSidebar
    onClick={ExternalFinalFormSubmit('FormMonthReportEdit')}
    buttonLabel={'Сохранить отчет'}
  />}
>
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
    <div className="form__category">
      <TagList/>
    </div>
    <h2 className="h2">Отчет:</h2>
    <FormMonthReportEdit/>
  </div>

</LayoutWithSidebar>);

export default MonthReportEdit;

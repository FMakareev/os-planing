import * as React from 'react';
import {compose} from 'react-apollo';
import {ProjectEditorSidebar} from "../../../Events/Components/ProjectEditorSidebar/ProjectEditorSidebar";
import LayoutWithSidebar from "../../../../Containers/LayoutWithSidebar/LayoutWithSidebar";
import FormReportEdit from '../../Components/FormReportEdit/FormReportEdit';
import PageTitle from "../../../../Components/PageTitle/PageTitle";
import ProjectPlace from '../../../../Components/ProjectPlace/ProjectPlace';
import EventPageEnhancer from "../../../Events/Enhancers/EventPageEnhancer/EventPageEnhancer";
import ReportEditEnhancer from "../../Enhancers/ReportEditEnhancer/ReportEditEnhancer";
import {IEvent, IReport} from "../../../../Apollo/schema";
import EventBreadcrumbs from "../../../Events/Components/EventBreadcrumbs/EventBreadcrumbs";
import TagList from '../../../../Components/TagList/TagList';
import ExternalFinalFormSubmit from '../../../../Helpers/ExternalFinalFormSubmit';
import GetReportEnhancer from "../../Enhancers/GetReportEnhancer/GetReportEnhancer";

const FormReportEditWithEnhancer = ReportEditEnhancer(FormReportEdit);


interface IReportEditProps {
  data: IEvent;
  report?: IReport;
}


const composeEnhancers = compose(EventPageEnhancer,GetReportEnhancer);

export const ReportEdit: React.FC<IReportEditProps> = ({data,report}) => (<LayoutWithSidebar
  sidebarContent={<ProjectEditorSidebar
    onClick={ExternalFinalFormSubmit('FormReportEdit')}
  />}
>
  <EventBreadcrumbs
    date={data.date}
    id={data.id}
    city={data.reception.city}
  />
  <PageTitle>
    {data.title}
  </PageTitle>
  <div className="inner__content">

    <ProjectPlace>
      {data.reception.city}
    </ProjectPlace>
    <div className="form__category">
      <TagList
        projects={data.projects}
      />
    </div>
    <h2 className="h2">Отчет:</h2>
    <FormReportEditWithEnhancer
      initialValues={{
        event: data.id,
        ...report,
      }}
    />
  </div>

</LayoutWithSidebar>);

export default composeEnhancers(ReportEdit);

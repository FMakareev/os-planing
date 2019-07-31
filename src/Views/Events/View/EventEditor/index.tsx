import * as React from 'react';
import LayoutWithSidebar from "../../../../Containers/LayoutWithSidebar/LayoutWithSidebar";
import {FormEventEditor} from '../../Components/FormEventEditor/FormEventEditor';
import {ProjectEditorSidebar} from '../../Components/ProjectEditorSidebar/ProjectEditorSidebar';
import EventBreadcrumbs from "../../Components/EventBreadcrumbs/EventBreadcrumbs";
import {IEvent} from "../../../../Apollo/schema";
import EventPageEnhancer from "../../Enhancers/EventPageEnhancer/EventPageEnhancer";
import EditEventEnhance from "../../Enhancers/EditEventEnhance/EditEventEnhance";
import ExternalFinalFormSubmit from "../../../../Helpers/ExternalFinalFormSubmit";


interface IEventEditProps {
  data: IEvent;
}

const FormProjectEditorWithEditEventEnhance = EditEventEnhance(FormEventEditor);

export const EventEdit: React.FC<IEventEditProps> = ({data}) => (<LayoutWithSidebar
  sidebarContent={<ProjectEditorSidebar
    onClick={ExternalFinalFormSubmit('FormEventEditor')}
    date={data && data.date}/>}
>
  <EventBreadcrumbs
    date={data && data.date}
    id={data && data.id}
    reception={data && data.reception}
    history={[
      ...(data && data.title ? [{
        name: data && data.title,
        to: `/event/${data && data.id}`,
      },] : [])
    ]}
  />

  <div className="inner__content">
    <FormProjectEditorWithEditEventEnhance
      initialValues={data}
    />
  </div>

</LayoutWithSidebar>);

export default EventPageEnhancer(EventEdit);

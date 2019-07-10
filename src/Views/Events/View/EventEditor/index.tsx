import * as React from 'react';
import LayoutWithSidebar from "../../../../Containers/LayoutWithSidebar/LayoutWithSidebar";
import {FormProjectEditor} from '../../Components/FormProjectEditor/FormProjectEditor';
import {ProjectEditorSidebar} from '../../Components/ProjectEditorSidebar/ProjectEditorSidebar';
import EventBreadcrumbs from "../../Components/EventBreadcrumbs/EventBreadcrumbs";
import {IEvent} from "../../../../Apollo/schema";
import EventPageEnhancer from "../../Enhancers/EventPageEnhancer/EventPageEnhancer";
import EditEventEnhance from "../../Enhancers/EditEventEnhance/EditEventEnhance";


interface IEventEditProps {
  data: IEvent;
}

const FormProjectEditorWithEditEventEnhance = EditEventEnhance(FormProjectEditor);

export const EventEdit: React.FC<IEventEditProps> = ({data}) => (<LayoutWithSidebar
  sidebarContent={<ProjectEditorSidebar
    onClick={() => {
      const form = document.getElementById('FormProjectEditor');
      form && form.dispatchEvent(new Event('submit', {cancelable: true}))
    }}
    date={data && data.date}/>}
>
  <EventBreadcrumbs
    date={data && data.date}
    id={data && data.id}
  />

  <div className="inner__content">
    <FormProjectEditorWithEditEventEnhance
      initialValues={data}
    />
  </div>

</LayoutWithSidebar>);

export default EventPageEnhancer(EventEdit);

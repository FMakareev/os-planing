import * as React from 'react';
import {PageTitle} from "../../../../Components/PageTitle/PageTitle";
import {ProjectPlace} from '../../../../Components/ProjectPlace/ProjectPlace';
import {TagList} from "../../../../Components/TagList/TagList";
import {Button, ButtonAsEnum} from '../../../../Components/Button/Button';
import {IEvent} from "../../../../Apollo/schema";
import ReactHtmlParser from 'react-html-parser';
import EventBreadcrumbs from "../EventBreadcrumbs/EventBreadcrumbs";
import CheckAccess, {ICheckAccessApi} from "../../../../Enhancers/CheckAccess/CheckAccess";

interface IProjectPageItemContentProps extends IEvent {
  [prop: string]: any
}


export const ProjectPageItemContent: React.FC<IProjectPageItemContentProps> = ({title, text, projects, date, city, reception, id}) => (
  <React.Fragment>
    <EventBreadcrumbs
      date={date}
      id={id}
      city={city}
      reception={reception}
      history={[
        {
          name: title,
          to: `/event/${id}`,
        },
      ]}
    />

    <PageTitle>
      {title}
    </PageTitle>
    <div className="inner__content">
      <TagList
        projects={projects}
      />
      <ProjectPlace>
        {city}
      </ProjectPlace>

      <TagList/>


      <CheckAccess
        accessByReception={reception.id}
        render={({access}: ICheckAccessApi) => {
          if (!access) return null;
          return (<Button as={ButtonAsEnum.link} to={`/event/edit/${id}`}>
            Редактировать
          </Button>)
        }}
      />


      <div className={'text-content text-content'}>
        {text && ReactHtmlParser(text)}
      </div>

    </div>

  </React.Fragment>
);

export default ProjectPageItemContent;

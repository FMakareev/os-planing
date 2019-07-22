import * as React from 'react';
import InfinityScrollHoc, {IInfinityScrollHocVariables} from "../../../../Enhancers/InfinityScrollHOC/InfinityScrollHOC";
import InfinityScroll from "../../../../Components/InfinityScroll/InfinityScroll";
import ProjectListQuery from './ProjectListQuery.graphql';
import Preloader, {
  PreloaderSizeEnum,
  PreloaderThemeEnum
} from "../../../../Components/Preloader/Preloader";
import ProjectItem from "../../Components/ProjectItem/ProjectItem";
import PopupEditProject from "../../Components/PopupEditProject/PopupEditProject";
import {IProject} from "../../../../Apollo/schema";
import config from '../../../../config';
import PopupDelete from "../../../Users/Components/PopupDelete/PopupDelete";
import DeleteProjectEnhancer from "../DeleteProjectEnhancer/DeleteProjectEnhancer";

interface IProjectListProps {
  [prop: string]: any
}

const InfinityScrollWithQuery = (props: any) => {
  const Component = InfinityScrollHoc(InfinityScroll)({
    query: ProjectListQuery,
    queryName: 'projectPagination',
  });

  return <Component {...props}/>;
}

const PopupDeleteWithQuery = DeleteProjectEnhancer(PopupDelete);

const ProjectListEnhancer: React.FC<IProjectListProps> = () => {

  const [state] = React.useState<IInfinityScrollHocVariables>(config.pagination);

  return (<InfinityScrollWithQuery
    options={{
      variables: state,
    }}
    PreloaderComponent={<Preloader
      style={{
        margin: '50px auto',
        display: 'block'
      }}
      theme={PreloaderThemeEnum.blue}
      size={PreloaderSizeEnum.md}
    />}

    ItemComponent={({id, name}: IProject) => (
      <ProjectItem
        EditComponent={PopupEditProject}
        DeleteComponent={PopupDeleteWithQuery}
        id={id}
        name={name}
      />)}
  />)
};

export default ProjectListEnhancer;
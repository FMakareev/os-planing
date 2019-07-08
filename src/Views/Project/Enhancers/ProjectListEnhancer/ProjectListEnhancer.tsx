import * as React from 'react';
import InfinityScrollHoc from "../../../../Enhancers/InfinityScrollHOC/InfinityScrollHOC";
import InfinityScroll from "../../../../Components/InfinityScroll/InfinityScroll";
import ProjectListQuery from './ProjectListQuery.graphql';
import Preloader, {
  PreloaderSizeEnum,
  PreloaderThemeEnum
} from "../../../../Components/Preloader/Preloader";
import ProjectItem from "../../Components/ProjectItem/ProjectItem";
import PopupEditProject from "../../Components/PopupEditProject/PopupEditProject";
import {IProject} from "../../../../Apollo/schema";
import {paginationConfig} from "../../Views/ProjectList/paginationConfig";

interface IProjectListProps {
  [prop: string]: any
}

const InfinityScrollWithQuery = InfinityScrollHoc(InfinityScroll)({
  query: ProjectListQuery,
  queryName: 'projectPagination',
  variables:{
    ...paginationConfig,
  }
});


const ProjectListEnhancer: React.FC<IProjectListProps> = () => {
  return (<InfinityScrollWithQuery
    PreloaderComponent={<Preloader
      style={{
        margin: '50px auto',
        display: 'block'
      }}
      theme={PreloaderThemeEnum.blue}
      size={PreloaderSizeEnum.md}
    />}

    ItemComponent={({id,name}: IProject) => (
      <ProjectItem
        EditComponent={PopupEditProject}
        id={id}
        name={name}
      />)}
  />)
};

export default ProjectListEnhancer;
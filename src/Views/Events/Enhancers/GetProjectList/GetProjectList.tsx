import * as React from 'react';
import {Query} from "react-apollo";
import ProjectListQuery from './ProjectListQuery.graphql';
import Preloader, {PreloaderSizeEnum, PreloaderThemeEnum} from "../../../../Components/Preloader/Preloader";

interface IGetProjectListProps {
  [prop: string]: any
}

const GetProjectList = (props: IGetProjectListProps) => {
  return (<Query
    query={ProjectListQuery}
    variables={{
      limit: 100,
      page: 1,
    }}
  >
    {
      ({data, loading}: any) => {

        if (loading) {
          return (<Preloader
            style={{
              margin: '50px auto',
              display: 'block'
            }}
            theme={PreloaderThemeEnum.blue}
            size={PreloaderSizeEnum.md}
          />)
        }

        return props.render({...props, options: data && data.projectPagination.items})
      }
    }
  </Query>)
};

export default GetProjectList;
import ProjectListQuery from "../ProjectListEnhancer/ProjectListQuery.graphql";
import config from '../../../../config';


const RefetchProjectListQueries = (variables?: any) => ({
  query: ProjectListQuery,
  variables: {
    ...config.pagination,
    ...variables,
  }
});

export default RefetchProjectListQueries;
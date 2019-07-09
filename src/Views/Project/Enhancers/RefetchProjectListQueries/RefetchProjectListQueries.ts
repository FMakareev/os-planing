import ProjectListQuery from "../ProjectListEnhancer/ProjectListQuery.graphql";
import config from '../../../../config';


const RefetchProjectListQueries = () => ({
  query: ProjectListQuery,
  variables: config.pagination
});

export default RefetchProjectListQueries;
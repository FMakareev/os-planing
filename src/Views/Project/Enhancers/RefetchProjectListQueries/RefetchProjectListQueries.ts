import ProjectListQuery from "../ProjectListEnhancer/ProjectListQuery.graphql";
import {paginationConfig} from "../../Views/ProjectList/paginationConfig";


const RefetchProjectListQueries = () => ({
  query: ProjectListQuery,
  variables: paginationConfig
});

export default RefetchProjectListQueries;
import ReceptionListQuery from "../ReceptionList/ReceptionListQuery.graphql";
import config from '../../../../config';

const RefetchReceptionListQueries = () => ({
  query: ReceptionListQuery,
  variables: config.pagination
});

export default RefetchReceptionListQueries;
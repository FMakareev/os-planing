import ReceptionListQuery from "../ReceptionListHOC/ReceptionListQuery.graphql";


const RefetchReceptionListQueries = () => ({
  query: ReceptionListQuery,
  variables: {
    limit: 50,
    page: 1,
  }
});

export default RefetchReceptionListQueries;
import * as React from 'react';
import {ReceptionTableRow} from "../../Components/ReceptionTableRow/ReceptionTableRow";
import PopupEditUser from "../../Components/PopupEditUser/PopupEditUser";
import PopupDelete from "../../Components/PopupDelete/PopupDelete";
import DeleteReceptionHOC from '../DeleteReceptionHOC/DeleteReceptionHOC';
import InfinityScrollHoc from "../../../../Enhancers/InfinityScrollHOC/InfinityScrollHOC";
import InfinityScroll from "../../../../Components/InfinityScroll/InfinityScroll";
import ReceptionListQuery from './ReceptionListQuery.graphql';
import Preloader, {
  PreloaderSizeEnum,
  PreloaderThemeEnum
} from "../../../../Components/Preloader/Preloader";
import config from "../../../../config";

interface IReceptionListProps {
  [prop: string]: any
}

const InfinityScrollWithQuery = InfinityScrollHoc(InfinityScroll)({
  query: ReceptionListQuery,
  queryName: 'receptionPagination',
  variables:{
    ...config.pagination,
  }
});

const PopupDeleteWithQuery = DeleteReceptionHOC(PopupDelete);

const ReceptionList: React.FC<IReceptionListProps> = () => {
  return (<InfinityScrollWithQuery
    PreloaderComponent={<Preloader
      style={{
        margin: '50px auto',
        display: 'block'
      }}
      theme={PreloaderThemeEnum.blue}
      size={PreloaderSizeEnum.md}
    />}

    ItemComponent={(props: any) => (
      <ReceptionTableRow
        EditComponent={PopupEditUser}
        DeleteComponent={PopupDeleteWithQuery}
        {...props}
      />)}
  />)
};

export default ReceptionList;
import * as React from 'react';
import {IReception} from "../../../../Apollo/schema";
import {NotificationTableRow} from "../NotificationTableRow/NotificationTableRow";
import PopupEditUser from "../PopupEditUser/PopupEditUser";
import PopupDelete from "../PopupDelete/PopupDelete";
import DeleteReceptionHOC from '../../Enhancers/DeleteReceptionHOC/DeleteReceptionHOC';

interface IReceptionListProps {
  items: IReception[];

  [prop: string]: any
}

const PopupDeleteWithQuery = DeleteReceptionHOC(PopupDelete);

const ReceptionList: React.FC<IReceptionListProps> = ({items}) => {
  return <React.Fragment>
    {
      Array.isArray(items) && items.map((item: IReception, idx: number) => (
        <NotificationTableRow
          EditComponent={PopupEditUser}
          DeleteComponent={PopupDeleteWithQuery}
          key={`ReceptionList-${idx}`}
          {...item}
        />))
    }
  </React.Fragment>;
};

export default ReceptionList;
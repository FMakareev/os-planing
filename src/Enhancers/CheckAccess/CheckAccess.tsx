import * as React from 'react';
import {connect} from "react-redux";
import {IStoreState} from '../../Store/Store';
import {UserRoleEnum} from "../../Apollo/schema";


const mapStateToProps = (state: IStoreState) => ({
  user: state.user,
});


export interface ICheckAccessApi {
  access: UserRoleEnum;
}

interface ICheckAccessProps {
  /** @desc доступ по роли */
  accessRights?: UserRoleEnum;
  accessByReception?: string;
  accessByUser?: string;
  render: any;

  [prop: string]: any
}

const CheckAccess: React.FC<ICheckAccessProps> = ({children, accessRights, accessByUser, accessByReception, user, render, ...rest}) => {


  let access = null;
  if (accessRights) {
    access = accessRights && user.user ? accessRights === user.user.role : false;
  } else if (accessByReception) {
    access = accessByReception && user.user && user.user.reception ? accessByReception === user.user.reception.id : false;
  } else if (accessByUser) {
    access = accessByUser && user.user.id ? accessByUser === user.user.id : false;
  }


  return render({access, ...rest})
};


export default connect(mapStateToProps)(CheckAccess);
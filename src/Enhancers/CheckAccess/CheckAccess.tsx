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
  accessRights: UserRoleEnum
  render: any;
  [prop: string]: any
}

const CheckAccess: React.FC<ICheckAccessProps> = ({children, accessRights, user, render, ...rest}) => {
  const access = accessRights && user.user ? accessRights === user.user.role : false;
  return render({access, ...rest})
};


export default connect(mapStateToProps)(CheckAccess);
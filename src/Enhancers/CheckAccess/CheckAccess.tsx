import * as React from 'react';
import {connect} from "react-redux";
import {IStoreState} from '../../Store/Store';
import {UserRoleEnum} from "../../Apollo/schema";


const mapStateToProps = (state: IStoreState) => ({
  user: state.user,
});


interface ICheckAccessProps {
  [prop: string]: any
}

const CheckAccess = (WrapperComponent: React.ElementType) => (accessRights: UserRoleEnum) =>
  connect(mapStateToProps)((props: ICheckAccessProps) => {
    const access = accessRights && props.user.user ? accessRights === props.user.user.role : false;
    return <WrapperComponent access={access} {...props}/>
  });


export default CheckAccess;
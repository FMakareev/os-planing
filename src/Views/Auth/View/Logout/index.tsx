import * as React from 'react';
import {LogOutAction} from '../../../../Store/Reducers/User/actions';
import {RouteComponentProps, withRouter} from "react-router-dom";
import {connect} from "react-redux";

interface ILogoutPageProps extends RouteComponentProps {
  [prop: string]: any;
}

interface ILogoutPageState {
  [prop: string]: any;
}

export class LogoutPage extends React.Component<ILogoutPageProps, ILogoutPageState> {

  componentDidMount(): void {
    this.props.LogOut();
    this.props.history.push('/login');
  }

  render() {
    return null;
  }
}


const mapDispatchToProps = (dispatch: any) => ({
  LogOut: () => dispatch(LogOutAction())
})
export default connect(null, mapDispatchToProps)(withRouter(LogoutPage));
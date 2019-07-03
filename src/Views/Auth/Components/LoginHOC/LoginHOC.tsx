import * as React from 'react';
import {FORM_ERROR} from "final-form";
import {connect} from 'react-redux'
import {IStoreState} from '../../../../Store/Store';
import {UserLoginAction} from '../../../../Store/Reducers/User/actions';
import {IUserState} from "../../../../Store/Reducers/User/reducers";

interface ILoginHoc {
  user: IUserState;
  userLogin: any;

  [prop: string]: any;
}

const mapStateToProps = (state: IStoreState) => ({
  user: state.user,
});
const mapDispatchToProps = (dispatch: any) => ({
  userLogin: (values: any) => dispatch(UserLoginAction(values))
});

const LoginHoc = (WrappedComponent: React.ElementType) => () => {


  return connect(mapStateToProps, mapDispatchToProps)(class extends React.Component<ILoginHoc> {

    onSubmit = async (values: any) => {
      const result = await this.props.userLogin(values);
      if(result.error){
        return {[FORM_ERROR]: result.error}
      }
    };

    render() {
      return (<WrappedComponent
        onSubmit={this.onSubmit}
      />)
    }
  })
};

export default LoginHoc;
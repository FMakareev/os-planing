import * as React from 'react';
import {FORM_ERROR} from "final-form";
import {connect} from 'react-redux'
import {IStoreState} from '../../../../Store/Store';
import {ILoginResponse, UserLoginAction} from '../../../../Store/Reducers/User/actions';
import {IUserState} from "../../../../Store/Reducers/User/reducers";
import {LoginFormState} from "../LoginForm/LoginForm";
import {AxiosResponse} from "axios";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {GetMessageByTranslateKey} from "../../../../Shared/TranslateDict";

interface ILoginHoc extends RouteComponentProps{
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


const LoginHoc = (WrappedComponent: React.ElementType) => {
  return connect(mapStateToProps, mapDispatchToProps)(withRouter(class extends React.Component<ILoginHoc> {

    onSubmit = async (values: LoginFormState) => {
      const {data, status}: AxiosResponse<ILoginResponse> = await this.props.userLogin(values);
      console.log(data, status);
      if (status === 200 && data.user_data) {
        return this.props.history.push('/');
      }

      return {
        [FORM_ERROR]: GetMessageByTranslateKey(data.message),
        // ...normalizeSubmissionError(data), // TODO: на беке нужно сделать более коректный вывод ошибок по полям прежде чем это использовать
      }

    };

    render() {
      console.log(this.props);
      const {user} = this.props;
      return (<WrappedComponent
        loading={user.userLoginLoading}
        onSubmit={this.onSubmit}
      />)
    }
  }))
};

export default LoginHoc;
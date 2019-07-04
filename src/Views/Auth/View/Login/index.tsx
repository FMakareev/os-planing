import * as React from 'react';
import LoginForm from '../../Components/LoginForm/LoginForm';
import startLogo from "../../../../Assets/img/start-logo.svg";
import Footer from "../../../../Components/Footer/Footer";
import LoginHoc from "../../Components/LoginHOC/LoginHOC";


const LoginFormWithHOC = LoginHoc(LoginForm);


interface ILoginPageProps {
  [prop: string]: any;
}

interface ILoginPageState {
  [prop: string]: any;
}

export class LoginPage extends React.Component<ILoginPageProps, ILoginPageState> {


  render() {
    return (
      <div className="start-bg">
        <div className="start">
          <div className="start__logo">
            <img
              src={startLogo}
              alt="logo"
            />
          </div>

          <LoginFormWithHOC/>

          <Footer className="start__personaly"/>
        </div>
      </div>
    );
  }
}

export default LoginPage;
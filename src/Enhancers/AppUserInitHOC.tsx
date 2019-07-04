import * as React from 'react';
import {IStoreState} from "../Store/Store";
import {InitUserStoreAction} from "../Store/Reducers/User/actions";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {IUserState} from "../Store/Reducers/User/reducers";
import Preloader, {PreloaderPositionEnum, PreloaderSizeEnum, PreloaderThemeEnum} from "../Components/Preloader/Preloader";

interface IAppUserInitHocState {
  [prop: string]: any
}

interface IAppUserInitHocProps extends RouteComponentProps {
  userInit(): void;

  user: IUserState;

  [prop: string]: any
}

const mapStateToProps = (state: IStoreState) => ({
  user: state.user,
});
const mapDispatchToProps = (dispatch: any) => ({
  userInit: () => dispatch(InitUserStoreAction())
});


const AppUserInitHoc = (WrapperComponent: React.ElementType) => {
  return connect(mapStateToProps, mapDispatchToProps)(withRouter(class extends React.Component<IAppUserInitHocProps, IAppUserInitHocState> {

    componentDidMount = async () => {
      const result = await this.props.userInit();
      if (result === null) {
        this.props.history.push('/login');
      }
    };

    render() {
      const {user} = this.props;
      if (user.userInitLoading) {
        return (<Preloader
          theme={PreloaderThemeEnum.blue}
          position={PreloaderPositionEnum.center}
          size={PreloaderSizeEnum.md}
        />)
      }
      return <WrapperComponent/>
    }
  }))
};

export default AppUserInitHoc;
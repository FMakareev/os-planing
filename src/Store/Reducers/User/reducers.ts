/** isBrowser */
import {AnyAction, Reducer} from "redux";
import {
  USER_ADD,
  USER_LOGIN_LOADING_ERROR,
  USER_LOGIN_LOADING_START,
  USER_LOGIN_LOADING_SUCCESS,
  USER_REMOVE,
  USER_UPDATE_LOADING_ERROR,
  USER_UPDATE_LOADING_START,
  USER_UPDATE_LOADING_SUCCESS,
  USER_INIT_LOADING_START,
  USER_INIT_LOADING_SUCCESS,
  USER_INIT_LOADING_ERROR,
} from './actionTypes';
import {IUser} from "../../../Apollo/schema";


export interface IUserState {
  userLoginLoading: boolean;
  userInitLoading: boolean;
  userUpdateLoading: boolean;
  isLogin: boolean;
  error: any;
  user: IUser | null;
}

export const UserInitialState: IUserState = {
  error: null,
  userLoginLoading: false,
  userInitLoading: true,
  userUpdateLoading: false,
  isLogin: false,
  user: null,
};


export const ReducerUser: Reducer = (prevState = UserInitialState, {type,user, ...rest}: AnyAction) => {
  switch (type) {

    /**
     * АВТОРИЗАЦИЯ
     * */
    case USER_LOGIN_LOADING_START:
      return Object.assign({}, prevState, {
        userLoginLoading: true,
        ...rest,
      });
    case USER_LOGIN_LOADING_SUCCESS:
      return Object.assign({}, prevState, {
        ...UserInitialState,
        ...rest,
        user,
        isLogin: true,
      });
    case USER_LOGIN_LOADING_ERROR:
      return Object.assign({}, prevState, {
        userInitLoading: false,
        isLogin: false,
        ...rest,
      });

    /**
     * ИНИЦИАЛИЗАЦИЯ
     * */
    case USER_INIT_LOADING_START:
      return Object.assign({}, prevState, {
        userInitLoading: true,

        ...rest,
      });
    case USER_INIT_LOADING_SUCCESS:
      return Object.assign({}, prevState, {
        ...UserInitialState,
        ...rest,
        user,
        isLogin: true,
      });
    case USER_INIT_LOADING_ERROR:
      return Object.assign({}, prevState, {
        userInitLoading: false,
        isLogin: false,
        ...rest,
      });

    /** экшены обновления пользователя */
    case USER_UPDATE_LOADING_START:
      return Object.assign({}, prevState, {
        userUpdateLoading: true,
        ...rest,
      });
    case USER_UPDATE_LOADING_SUCCESS:
      return Object.assign({}, prevState, {
        ...UserInitialState,
        isLogin: true,
        ...rest,
      });
    case USER_UPDATE_LOADING_ERROR:
      return Object.assign({}, prevState, {
        ...UserInitialState,
        isLogin: false,
        ...rest,
      });

    case USER_ADD:
      localStorage.setItem('user_data', JSON.stringify(user));
      return Object.assign({}, prevState, {
        ...UserInitialState,
        isLogin: true,
        userInitLoading: false,
        user,
        ...rest,
      });
    case USER_REMOVE:

      return Object.assign({}, prevState, {
        ...UserInitialState,
        userInitLoading: false,
      });    default:
      return prevState;
  }
};

export default ReducerUser;

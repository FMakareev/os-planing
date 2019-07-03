/** isBrowser */
import {
  USER_ADD,
  USER_LOGIN_LOADING_ERROR,
  USER_LOGIN_LOADING_START,
  USER_LOGIN_LOADING_SUCCESS,
  USER_REMOVE,
  USER_UPDATE_LOADING_ERROR,
  USER_UPDATE_LOADING_START,
  USER_UPDATE_LOADING_SUCCESS,
} from './actionTypes';
import {IUser} from "./interfaces";
import {Action, Reducer} from "redux";



export interface IUserState {
  userLoginLoading: boolean;
  userUpdateLoading: boolean;
  isLogin: boolean;
  error: any;
  user: IUser | null;
}

export const UserInitialState: IUserState = {
  error: null,
  userLoginLoading: false,
  userUpdateLoading: false,
  isLogin: false,
  user: null,
};


export const ReducerUser: Reducer = (prevState = UserInitialState, {  type,  ...rest}: Action) => {
  switch (type) {
    case USER_LOGIN_LOADING_START:
      return Object.assign({}, prevState, {
        userLoginLoading: true,
        ...rest,
      });
    case USER_LOGIN_LOADING_SUCCESS:
      return Object.assign({}, prevState, {
        ...UserInitialState,
        ...rest,
        isLogin: true,
      });
    case USER_LOGIN_LOADING_ERROR:
      return Object.assign({}, prevState, {
        initLoading: false,
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
      return Object.assign({}, prevState, {
        ...UserInitialState,
        isLogin: true,
        ...rest,
      });
    case USER_REMOVE:

      return UserInitialState;
    default:
      return prevState;
  }
};

export default ReducerUser;

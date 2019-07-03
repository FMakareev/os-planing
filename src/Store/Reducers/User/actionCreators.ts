import {IUser} from "./interfaces";
import {
  USER_ADD,
  USER_LOGIN_LOADING_START,
  USER_LOGIN_LOADING_SUCCESS,
  USER_REMOVE,
  USER_UPDATE_LOADING_ERROR,
  USER_LOGIN_LOADING_ERROR, USER_UPDATE_LOADING_SUCCESS, USER_UPDATE_LOADING_START
} from "./actionTypes";
import {UserInitialState} from "./reducers";


export const AddUser = (user: IUser) => ({
  type: USER_ADD,
  user
});


/**
 *
 *  АВТОРИЗАЦИЯ
 *
 * */
export const UserLoginError = (error: any) => ({
  type: USER_LOGIN_LOADING_ERROR,
  ...UserInitialState,
  error
});

export const UserLoginSuccess = (user: any) => ({
  type: USER_LOGIN_LOADING_SUCCESS,
  ...UserInitialState,
  isLogin: true,
  user,
});

export const UserLoginLoading = () => ({
  type: USER_LOGIN_LOADING_START,
  ...UserInitialState,
  userLoginLoading: true,
});


/**
 *
 *  АВТОРИЗАЦИЯ
 *
 * */
export const UserUpdateError = (error: any) => ({
  type: USER_UPDATE_LOADING_ERROR,
  error
});

export const UserUpdateSuccess = (user: any) => ({
  type: USER_UPDATE_LOADING_SUCCESS,
  user,
});

export const UserUpdateLoading = () => ({
  type: USER_UPDATE_LOADING_START,
  userUpdateLoading: true,
});




export const RemoveUser = () => ({
  type: USER_REMOVE,
  user: null
});


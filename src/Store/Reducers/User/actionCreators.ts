import {
  USER_ADD,
  USER_LOGIN_LOADING_START,
  USER_LOGIN_LOADING_SUCCESS,
  USER_REMOVE,
  USER_UPDATE_LOADING_ERROR,
  USER_LOGIN_LOADING_ERROR,
  USER_UPDATE_LOADING_SUCCESS,
  USER_UPDATE_LOADING_START,
  USER_INIT_LOADING_ERROR,
  USER_INIT_LOADING_SUCCESS,
  USER_INIT_LOADING_START
} from "./actionTypes";
import {UserInitialState} from "./reducers";
import {IUser} from "../../../Apollo/schema";


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
  userInitLoading: false,
  error
});

export const UserLoginSuccess = (user: any) => ({
  type: USER_LOGIN_LOADING_SUCCESS,
  ...UserInitialState,
  userInitLoading: false,
  isLogin: true,
  user,
});

export const UserLoginLoading = () => ({
  type: USER_LOGIN_LOADING_START,
  ...UserInitialState,
  userInitLoading: false,
  userLoginLoading: true,
});


/**
 *
 *  ИНИЦИАЛИЗАЦИЯ
 *
 * */
export const UserInitError = (error: any) => ({
  type: USER_INIT_LOADING_ERROR,
  ...UserInitialState,
  userInitLoading: false,
  error
});

export const UserInitSuccess = (user: any) => ({
  type: USER_INIT_LOADING_SUCCESS,
  ...UserInitialState,
  userInitLoading: false,
  isLogin: true,
  user,
});

export const UserInitLoading = () => ({
  type: USER_INIT_LOADING_START,
  ...UserInitialState,
  userInitLoading: true,
});

/**
 *
 *  ОБНОВЛЕНИЕ ДАННЫХ ПОЛЬЗОВАТЕЛЯ
 *
 * */
export const UserUpdateError = (error: any) => ({
  type: USER_UPDATE_LOADING_ERROR,
  userInitLoading: false,
  error
});

export const UserUpdateSuccess = (user: any) => ({
  type: USER_UPDATE_LOADING_SUCCESS,
  userInitLoading: false,
  user,
});

export const UserUpdateLoading = () => ({
  type: USER_UPDATE_LOADING_START,
  userInitLoading: false,
  userUpdateLoading: true,
});




export const RemoveUser = () => ({
  type: USER_REMOVE,
  ...UserInitialState,
  userInitLoading: false,
});


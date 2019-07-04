import JsonToUrlEncoded from "../../../Helpers/JsonToUrlEncoded";
import axios, {AxiosError, AxiosResponse} from 'axios';
import {Dispatch} from "redux";
import {
  UserLoginError,
  UserLoginSuccess,
  UserLoginLoading,
  RemoveUser,
  UserInitLoading,
  UserInitSuccess,
  UserInitError
} from "./actionCreators";
import {IUser} from "../../../Apollo/schema";


export const LogOutAction = () => (dispatch: Dispatch) => {
  return new Promise(async () => {
    dispatch(RemoveUser());
    axios({
      method: 'post',
      url: '/user/logout',
    })
      .then(() => {
        window.localStorage.clear();
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i += 1) {
          const cookie = cookies[i];
          const eqPos = cookie.indexOf('=');
          const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
        }
      });
  })
};


export const InitUserStoreAction = () => (dispatch: Dispatch) => {
  return new Promise((resolve) => {
    try {
      dispatch(UserInitLoading());
      const userData: string | null = window.localStorage.getItem('user_date');
      if (userData) {
        dispatch(UserInitSuccess(JSON.parse(userData)));
        resolve(JSON.parse(userData));
        return JSON.parse(userData);
      }
      resolve({});

      dispatch(UserInitError('User not found'));
    } catch (e) {
      resolve({});
      dispatch(UserInitError(e));
    }
  })
};


export interface ILoginResponse {
  user_data: IUser;
  message: string;
  errors?: {
    login: string | null;
    password: string | null;
  }
}

export const UserLoginAction = (value: any) => (dispatch: Dispatch) => {
  dispatch(UserLoginLoading());
  return new Promise((resolve) => {
    axios({
      method: 'post',
      url: '/user/auth',
      headers: {
        Accept: 'text/html,application/xhtml+xml,application/xml',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: JsonToUrlEncoded(value)
    })
      .then((response: AxiosResponse<ILoginResponse>) => {
        if (response.data && response.data.user_data) {
          localStorage.setItem('user_date', JSON.stringify(response.data.user_data));
          dispatch(UserLoginSuccess(response.data.user_data));
        } else {
          throw response;
        }
        resolve(response);
      })
      .catch((error: AxiosError<ILoginResponse>) => {
        dispatch(UserLoginError(error.message));
        resolve({
          ...error,
          data: {
            message: error.message,
            ...(error.response && error.response.data),
          }
        });
      })

  })
};


export const UserUpdateAction = (value: any) => (dispatch: Dispatch) => {
  dispatch(UserLoginLoading());
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: '/user/auth',
      headers: {
        Accept: 'text/html,application/xhtml+xml,application/xml',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: JsonToUrlEncoded(value)
    })
      .then((response: any) => {
        if (response.data && response.data.user) {
          dispatch(UserLoginSuccess(response.data.user));
        } else {
          throw response;
        }
        resolve(response);
      })
      .catch((error: any) => {
        dispatch(UserLoginError(error));
        reject(error);
      })

  })
};



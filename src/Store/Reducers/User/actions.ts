import JsonToUrlEncoded from "../../../Helpers/JsonToUrlEncoded";
import axios, {AxiosError} from 'axios';
import {Dispatch} from "redux";
import {AddUser, UserLoginError, UserLoginSuccess, UserLoginLoading} from "./actionCreators";

export const LogOut = () => (dispatch: Dispatch) => {
  return new Promise(() => {

    window.localStorage.clear();
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i += 1) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }
  })

};


export const UserLoginAction = (value: any) => (dispatch: Dispatch) => {
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
        console.log(response);
        dispatch(UserLoginSuccess(response.data));
        resolve(response);
      })
      .catch((error: AxiosError) => {
        console.log(error);
        console.log(error.code);
        console.log(error.message);
        dispatch(UserLoginError(error));
        resolve({
          error: error.message,
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
        console.log(response);
        dispatch(UserLoginSuccess(response.data));
        resolve(response);
      })
      .catch((error: any) => {
        console.log(error);
        dispatch(UserLoginError(error));
        reject(error);
      })

  })
};



import {ActionType} from "./type";

import AuthService from "../services/AuthService";

export const register = (fullname, username, email, password) => (dispatch) => {
    return AuthService.register(fullname, username, email, password).then(
      (response) => {
        dispatch({
          type: ActionType.REGISTER_SUCCESS,
        });
  
        dispatch({
          type: ActionType.SET_MESSAGE,
          payload: response.data.message,
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: ActionType.REGISTER_FAIL,
        });
  
        dispatch({
          type: ActionType.SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
  
  export const login = (username, password) => (dispatch) => {
    return AuthService.login(username, password).then(
      (data) => {
        dispatch({
          type: ActionType.LOGIN_SUCCESS,
          payload: { user: data },
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: ActionType.LOGIN_FAIL,
        });
  
        dispatch({
          type: ActionType.SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
  
  export const logout = () => (dispatch) => {
    AuthService.logout();
  
    dispatch({
      type: ActionType.LOGOUT,
    });
  };
  
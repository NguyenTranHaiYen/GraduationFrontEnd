import {ActionType} from "./type";

export const setMessage = (message) => ({
  type: ActionType.SET_MESSAGE,
  payload: message,
});

export const clearMessage = () => ({
  type: ActionType.CLEAR_MESSAGE,
});

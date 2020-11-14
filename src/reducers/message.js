import { ActionType } from "../actions/type";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ActionType.SET_MESSAGE:
      return { message: payload };

    case ActionType.CLEAR_MESSAGE:
      return { message: "" };

    default:
      return state;
  }
}

import { LOGIN, SIGNUP } from "./actions/actionType";

export default function reducer (state = {}, action) {
  switch (action.type) {
    case LOGIN:
      return {...state, loginSuccess: action.payload}
    case SIGNUP:
      return {...state, signupSuccess: action.payload}
    default:
      return state;
  }
}

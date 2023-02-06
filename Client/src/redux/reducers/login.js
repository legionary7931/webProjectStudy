import { LOGIN } from "../actions/actionType";

const login = (state = {}, action) => {
  switch(action.type){
    case LOGIN:
      return {...state, loginSuccess: action.payload}
    default:
      return state
  }   
}

export default login;
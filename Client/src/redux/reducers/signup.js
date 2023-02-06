import { SIGNUP } from "../actions/actionType";

const signup = (state = {}, action) => {
  switch(action.type){
    case SIGNUP:
      return {...state, signupSuccess: action.payload}
    default:
      return state
  }
    
  
}
export default signup;


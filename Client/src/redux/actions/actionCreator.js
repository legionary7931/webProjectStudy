// dispatch에 action객체를 만들어주는 action객체 생성기들

import Axios from '../../utils/Axios'
import * as types from './actionType';


export function login(dataToSubmit) {
  const request = Axios.post('/login', dataToSubmit)
                    .then(response => response.data)
  return {
    type: types.LOGIN,
    payload: request
  };
}

export function signup(dataToSubmit){
  const request = Axios.post('/signup', dataToSubmit)
                    .then(response => response.data)

  return {
    type: types.SIGNUP,
    payload: request
  };
}


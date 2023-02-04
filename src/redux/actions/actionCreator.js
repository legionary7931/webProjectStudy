// dispatch에 action객체를 만들어주는 action객체 생성기들

import axios from "axios";
import * as types from './actionType';

export function login(data) {
  const request = axios.post('../../backend/server', data)
                    .then(response => response.data)
  return {
    type: types.LOGIN,
    payload: request
  };
}

export function signup(data){
  const request = axios.post('../../backend/server', data)
                    .then(response => response.data)
  return {
    type: types.SIGNUP,
    payload: request
  };
}
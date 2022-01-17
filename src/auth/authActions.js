import axios from "axios";
import { toast } from "react-toastify";

import {
  USER_FETCHED,
  TOKEN_VALIDATED,
  OAPI_URL,
} from "../common/constants/constants";

function submit(values, url) {
  return (dispatch) => {
    axios
      .post(url, values)
      .then((resp) => {
        dispatch([{ type: USER_FETCHED, payload: resp.data }]);
      })
      .catch((e) => {
        e.response.data.errors.forEach((error) => toast.error(error));
      });
  };
}

export function login(values) {
  return submit(values, `${OAPI_URL}/login`);
}

export function logout() {
  return { type: TOKEN_VALIDATED, payload: false };
}

export function signup(values) {
  return submit(values, `${OAPI_URL}/signup`);
}

export function validateToken(token) {
  return (dispatch) => {
    if (token) {
      axios
        .post(`${OAPI_URL}/validateToken`, { token })
        .then((resp) => {
          dispatch({ type: TOKEN_VALIDATED, payload: resp.data.valid });
        })
        .catch((e) => dispatch({ type: TOKEN_VALIDATED, payload: false }));
    } else {
      dispatch({ type: TOKEN_VALIDATED, payload: false });
    }
  };
}

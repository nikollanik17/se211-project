import axios from "../../utility/axios";
import * as actionTypes from "./actionTypes";
import { startLoading, finishLoading } from "./loader";

export const setRegistrationTime = (payload) => {
  return {
    type: actionTypes.SET_REGISTRATION,
    payload,
  };
};

export const getRegistrationTime = () => {
  return (dispatch) => {
    dispatch(startLoading());
    axios
      .get("/registration")
      .then((response) => {
        dispatch(setRegistrationTime(response.data.expires));
        dispatch(finishLoading());
      })
      .catch((error) => {
        console.log("ERROR GET TIME", error.response);
        dispatch(finishLoading());
      });
  };
};

export const updateRegistrationTime = (expires, callback) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios
      .put("/registration", { expires })
      .then((response) => {
        dispatch(setRegistrationTime(response.data.expires));
        dispatch(finishLoading());
        callback && callback();
      })
      .catch((error) => {
        console.log("ERROR UPDATE TIME", error.response);
        dispatch(finishLoading());
        callback && callback();
      });
  };
};

import axios from "../../utility/axios";
import { startLoading, finishLoading } from "./loader";

export const login = (username, password, callback, errCallback) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios
      .post("/auth/login", { username, password })
      .then((response) => {
        localStorage.setItem("jwtToken", response.data.token);
        callback && callback();
        dispatch(finishLoading());
      })
      .catch((error) => {
        console.log("ERROR LOGIN", error.response);
        errCallback &&
          errCallback(
            error.response && error.response.data && error.response.data.message
          );
        dispatch(finishLoading());
      });
  };
};

export const createNewAdmin = (username, password) => {
  return (dispatch) => {
    axios
      .post("/auth/register", { username, password })
      .then((response) => {
        localStorage.setItem("jwtToken", response.data.token);
      })
      .catch((error) => {
        console.log("ERROR CREATE NEW ADMIN", error.response);
      });
  };
};

import axios from "../../utility/axios";
import * as actionTypes from "./actionTypes";
import { successNotification, errorsNotification } from "./notification";
import { startLoading, finishLoading } from "./loader";

export const setTeams = (payload) => {
  return {
    type: actionTypes.SET_TEAMS,
    payload,
  };
};

export const getTeams = () => {
  return (dispatch) => {
    dispatch(startLoading());
    axios
      .get("/teams")
      .then((response) => {
        dispatch(setTeams(response.data.data));
        dispatch(finishLoading());
      })
      .catch((error) => {
        console.log("ERROR GET TEAMS", error.response);
        dispatch(finishLoading());
      });
  };
};

export const postTeam = (name, size, leader, phoneNumber, callback) => {
  return (dispatch) => {
    axios
      .post("/teams", { name, size, leader, phoneNumber })
      .then((response) => {
        console.log("SUCCESS");
        callback();
        dispatch(successNotification(response.data.message));
      })
      .catch((error) => {
        console.log("ERROR CREATE TEAM", error.response);
        // dispatch(errorsNotification(error.response.data.message));
      });
  };
};

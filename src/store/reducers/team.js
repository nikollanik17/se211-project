import * as actionTypes from "../actions/actionTypes";

const initialState = {
  teams: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TEAMS:
      return {
        ...state,
        teams: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

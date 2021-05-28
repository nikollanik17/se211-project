import * as actionTypes from "../actions/actionTypes";

const initialState = {
  expiration: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_REGISTRATION:
      return {
        ...state,
        expiration: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

const defaultState = {
  type: "",
  category: "",
};

const SET_TYPE = "SET_TYPE";
const SET_CATEGORY = "SET_CATEGORY";
const SET_ALL = "SET_ALL";

export function pathReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_TYPE: {
      return { type: action.payload, category: "" };
    }
    case SET_CATEGORY: {
      return {
        category: action.payload,
        type: "",
      };
    }
    case SET_ALL: {
      return {
        type: action.payload.type,
        category: action.payload.category,
      };
    }
    default:
      return state;
  }
}

export const setCategory = data => ({ type: SET_CATEGORY, payload: data });
export const setType = data => ({ type: SET_TYPE, payload: data });
export const setAll = data => ({ type: SET_ALL, payload: data });

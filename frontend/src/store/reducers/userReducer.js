const defaultState = {
  isReg: false,
  user: {},
  cart: [],
  favourity: [],
};

const SET_USER = "SET_USER";
const SET_CART = "SET_CART";
const SET_FAVOURITY = "SET_FAVOURITY";

export function userReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        user: action.payload,
        isReg: true,
      };
    }
    case SET_CART: {
      return {
        ...state,
        cart: action.payload,
      };
    }
    case SET_FAVOURITY: {
      return { ...state, favourity: action.payload };
    }
    default:
      return state;
  }
}

export const setUser = data => ({ type: SET_USER, payload: data });
export const setCart = data => ({ type: SET_CART, payload: data });
export const setFavourity = data => ({ type: SET_FAVOURITY, payload: data });

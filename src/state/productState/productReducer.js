import { actionTypes } from "./actionTypes";

export const initialState = {
  loading: false,
  products: [],
  error: false,
  cart: [],
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_START:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case actionTypes.FETCHING_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: false,
      };

    case actionTypes.FETCHING_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case actionTypes.ADD_TO_CART:
      if (!state.cart.find((product) => product.id === action.payload.id)) {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }
      return state;

    default:
      return state;
  }
};

import { createStore } from "redux";

///initial state

const initialState = {
  login: "",
  cart: [],
  total: 0
};

///actions

export const LOG_IN_USER = "LOG_IN_USER";
export const ADD_TO_CART = "ADD_TO_CART";
export const INCREASE_TOTAL = "INCREASE_TOTAL"

///reducer

function reducer(state = initialState, action) {
    console.log(state)
  switch (action.type) {
    case LOG_IN_USER:
      return { ...state, login: action.payload };
    
    case ADD_TO_CART:
        const newCart = [...state.cart, action.payload]
        return  {...state, cart: newCart};    

    case INCREASE_TOTAL:
        const newTotal = state.total += action.payload
        return {...state, total: newTotal};    
      
        default:
      return state;
  }
}

export default createStore(reducer)
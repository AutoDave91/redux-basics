import {createStore} from 'redux';

// Initial State
const initialState = {
    login: '',
    cart: [],
    total: 0
};
// Actions
export const UPDATE_LOGIN = 'UPDATE_LOGIN';
export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_TOTAL = 'ADD_TOTAL';

// Reducer
function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_LOGIN:
            return{
                ...state, login: action.payload
            }
        case ADD_TO_CART:
            const newCart = [...state.cart, action.payload]
            return{...state, cart: newCart}
        case ADD_TOTAL:
            const newTotal = state.total += action.payload
            return {...state, total: newTotal}
        default:
            return state
    }
}

export default createStore(reducer)
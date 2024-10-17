import {combineReducers} from "@reduxjs/toolkit";
import pizzaReducer from "../features/pizza/pizzaSlice";
import chickenReducer from "../features/chicken/chickenSlice";
import userReducer from '../features/user/userSlice';

const rootReducer = combineReducers({
    pizza: pizzaReducer,
    chicken: chickenReducer,
    user: userReducer
});

export default rootReducer;
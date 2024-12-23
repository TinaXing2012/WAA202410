import userReducer from "./user-reducer";
import {applyMiddleware, createStore} from "redux";
import {thunk} from "redux-thunk";

export default createStore(userReducer, applyMiddleware(thunk));
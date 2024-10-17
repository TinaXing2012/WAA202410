import {combineReducers, createStore} from "redux";
import pizzaReducer from "./pizza-reducer";
import chickenReducer from "./chicken-reducer";

const combinedReducers = combineReducers({
    pizza: pizzaReducer,
    chicken: chickenReducer
});

const store = createStore(combinedReducers);

export default store;

/**
 *
 * {
 *     numOfPizza: 10
 * }
 *
 * {
 *     pizza: {numOfPizza: 10},
 *     chicken: {numOfChicken: 20}
 * }
 *
 */
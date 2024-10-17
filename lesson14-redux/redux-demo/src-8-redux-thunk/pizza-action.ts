
import {PIZZA_ORDER, PIZZA_RESTOCK} from "./constants";
import store from "./store";
import {Dispatch} from "redux";
import {ActionType} from "./pizza-reducer";

export const createOrderPizzaAction = () => ({
    type: PIZZA_ORDER
});

export const createRestockPizzaAction = (quantity: number) => ({
    type: PIZZA_RESTOCK,
    payload: quantity
});

export const createOrderPizzaAsyncAction = (delay: number) => (dispatch: Dispatch<ActionType>) => {
    setTimeout(() => {
        dispatch(createOrderPizzaAction());
    }, delay);
}



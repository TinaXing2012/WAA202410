import {PIZZA_ORDER, PIZZA_RESTOCK} from "./constants";

const initialState = {
    numOfPizza: 10
}

type ActionType = {
    type: string;
    payload?: number;
}

const pizzaReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case PIZZA_ORDER:
            return {...state, numOfPizza: state.numOfPizza-1};
        case PIZZA_RESTOCK:
            return {...state, numOfPizza: state.numOfPizza + action.payload!}
        default:
            return state;

    }
}

export default pizzaReducer;
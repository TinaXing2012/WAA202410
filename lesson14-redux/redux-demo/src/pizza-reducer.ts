import {PIZZA_ORDER} from "./constants";

const initialState = {
    numOfPizza: 10
}

type ActionType = {
    type: string;
}

const pizzaReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case PIZZA_ORDER:
            return {...state, numOfPizza: state.numOfPizza-1};
        default:
            return state;

    }
}

export default pizzaReducer;
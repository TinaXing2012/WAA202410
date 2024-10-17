import {CHICKEN_ORDER, CHICKEN_RESTOCK} from "./constants";

type ActionType = {
    type: string;
    payload?: number
}

const initialState = {
    numOfChicken: 20
}

const chickenReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case CHICKEN_ORDER:
            return {...state, numOfChicken: state.numOfChicken - 1};
        case CHICKEN_RESTOCK:
            return {...state, numOfChicken: state.numOfChicken + action.payload!};
        default:
            return state;
    }
}

export default chickenReducer;
import {produce} from "immer";
import {UPDATE_STREET} from "./constants";

type ActionType = {
    type: string;
    payload: string;
}

const initialState = {
    name: 'John Smith',
    address: {
        street: '1000 N 4th St',
        city: 'Fairfield',
        state: 'IA'
    }
}

const userReducer = (state = initialState, {type, payload}: ActionType) => {
    switch (type) {
        case UPDATE_STREET:
            return produce(state, (draft) => {
                draft.address.street = payload;
            });
        default:
            return state;
    }
}

export default userReducer;
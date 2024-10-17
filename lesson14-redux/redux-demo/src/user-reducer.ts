import {ActionType, User} from "./types";
import {FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS} from "./constants";

const initialState: {
    loading: boolean;
    users: User[];
    error: string
} = {
    loading: false,
    users: [],
    error: ''
}

const userReducer = (state = initialState, action: ActionType) => {
    const {type, payload} = action;
    switch (type) {
        case FETCH_USERS_REQUEST:
            return {...state, loading: true};
        case FETCH_USERS_SUCCESS:
            return {...state, loading: false, users: payload};
        case FETCH_USERS_FAILURE:
            return {...state, loading: false, users:[], error: payload}
        default:
            return state;
    }
}

export default userReducer;
import {FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS} from "./constants";
import {ActionType, User} from "./types";
import store from "./store";
import axios from "axios";
import {Dispatch} from "redux";

export const createFetchUserRequestAction = () => ({
    type: FETCH_USERS_REQUEST
});

export const createFetchUserSuccessAction = (users: User[]) => ({
    type: FETCH_USERS_SUCCESS,
    payload: users
});

export const createFetchUserFailureAction = (error: string) => ({
    type: FETCH_USERS_FAILURE,
    payload: error
});

export const createFetchUserAsyncAction = () => (dispatch: Dispatch<ActionType>) => {
    dispatch(createFetchUserRequestAction());
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data.map((u: any) => ({id: u.id, name: u.name}));
            dispatch(createFetchUserSuccessAction(users));
        })
        .catch(error => {
            dispatch(createFetchUserFailureAction(error.message));
        });
}
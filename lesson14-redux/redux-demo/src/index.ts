import axios from "axios";
import store from "./store";
import {
    createFetchUserAsyncAction,
    createFetchUserFailureAction,
    createFetchUserRequestAction,
    createFetchUserSuccessAction,
} from "./user-action";

console.log('initial state: ', store.getState());

store.subscribe(() => {
    console.log('Updated state: ', store.getState());
});

store.dispatch(createFetchUserAsyncAction());
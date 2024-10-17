import store from "./app/store";
import * as pizzaAction from "./features/pizza/pizzaSlice";
import * as chickenAction from "./features/chicken/chickenSlice";
import {fetchUsers} from "./features/user/userSlice";

// console.log('initial state: ', store.getState());

const unsubscribe = store.subscribe(() => {
    // console.log('updated state: ', store.getState());
});

store.dispatch(fetchUsers());
// store.dispatch(pizzaAction.order());
// store.dispatch(pizzaAction.restock(5));
// store.dispatch(pizzaAction.order());
//
// store.dispatch(chickenAction.order());
// store.dispatch(chickenAction.restock(8));

// unsubscribe();

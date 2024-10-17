import store from "./store";
import {createOrderPizzaAction, createRestockPizzaAction} from "./pizza-action";
import {createOrderChickenAction, createRestockChickenAction} from "./chicken-action";

console.log('initial state:', store.getState());
const unsubscribe = store.subscribe(() => {
    console.log('updated state: ', store.getState());
});

store.dispatch(createOrderPizzaAction());
store.dispatch(createOrderPizzaAction());
store.dispatch(createRestockPizzaAction(6));

store.dispatch(createOrderChickenAction());
store.dispatch(createRestockChickenAction(9));

unsubscribe();

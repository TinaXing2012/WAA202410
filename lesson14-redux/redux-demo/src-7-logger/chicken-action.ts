import {CHICKEN_ORDER, CHICKEN_RESTOCK} from "./constants";

export const createOrderChickenAction = () => ({
    type: CHICKEN_ORDER
});

export const createRestockChickenAction = (quantity: number) => ({
    type: CHICKEN_RESTOCK,
    payload: quantity
})
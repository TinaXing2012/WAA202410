import {UPDATE_STREET} from "./constants";

export const createUpdateStreetAction = (street: string) => ({
    type: UPDATE_STREET,
    payload: street
})
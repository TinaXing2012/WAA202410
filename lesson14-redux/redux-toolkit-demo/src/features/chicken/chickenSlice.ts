import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import * as pizzaAction from '../pizza/pizzaSlice';

const initialState = {
    numOfChicken: 20
}
const chickenSlice = createSlice({
    name: 'chicken',
    initialState,
    reducers: {
        order(state) {
            state.numOfChicken--;
        },
        restock(state, action: PayloadAction<number>){
            state.numOfChicken += action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(pizzaAction.order, (state) => {
            state.numOfChicken--;
        })
    }
});

export default chickenSlice.reducer;
export const {order, restock} = chickenSlice.actions;
import {useReducer, useState} from "react";

type ActionType = {
    type: string;
    payload: number;
}

const reducer = (state: number, action: ActionType) => {
    const {type, payload} = action;
    switch (type) {
        case 'INCREMENT':
            return state + payload;
        case 'DECREMENT':
            return state - payload;
        case 'RESET':
            return 0;
        default:
            return state;
    }
}

export default function ReducerHookDemo1() {

    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <>
            <h1>count: {count}</h1>
            <button onClick={() => dispatch({type: 'INCREMENT', payload: 10})}>+?</button>
            <br/>
            <button onClick={() => dispatch({type: 'DECREMENT', payload: 5})}>-?</button>
            <br/>
            <button onClick={() => dispatch({type: 'RESET', payload: 0})}>Reset</button>
        </>
    )
}
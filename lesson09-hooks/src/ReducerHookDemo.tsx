import {useReducer, useState} from "react";

type ActionType = {
    type: string;
}

const reducer = (state: number, action: ActionType) => {
    const {type} = action;
    switch (type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'RESET':
            return 0;
        default:
            return state;
    }
}

export default function ReducerHookDemo() {

    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <>
            <h1>count: {count}</h1>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>+1</button>
            <br/>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>-1</button>
            <br/>
            <button onClick={() => dispatch({type: 'RESET'})}>Reset</button>
        </>
    )
}
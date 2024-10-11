import {useState} from "react";
import Child from "./Child";

export default function App(){
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>count: {count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>+1</button>
            <Child counter={count} str="hello" age={20}/>
        </>
    )
}
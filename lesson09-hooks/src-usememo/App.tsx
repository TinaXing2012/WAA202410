import {useState} from "react";
import ExpensiveComp from "./ExpensiveComp";

export default function App(){

    const [count, setCount] = useState(0);
    const [num, setNum] = useState(1);

    return (
        <>
            <h1>useMemo</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count+1)}>+1</button>
            <h2>Num: {num}</h2>
            <button onClick={() => setNum(num+1)}>+1</button>
            <ExpensiveComp num={num}/>
        </>
    )
}
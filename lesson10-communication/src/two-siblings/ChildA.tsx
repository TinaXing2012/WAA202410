import {useState} from "react";

export default function ChildA({onCount}: {onCount: (count: number) => void}){
    const [count, setCount] = useState(0);
    return (
        <>
            <h2>Inside ChildA</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => onCount(count)}>Send to Parent</button>
        </>
    )
}
import {useState} from "react";

type PropsType = {
    onData: (count: number) => void;
}

export default function Child({onData}: PropsType){
    const [count, setCount] = useState(0);

    return (
        <>
            <p>Inside Child Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => onData(count)}>Send to Parent</button>
        </>
    )
}
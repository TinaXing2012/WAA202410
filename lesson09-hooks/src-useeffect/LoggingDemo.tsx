import {useEffect, useState} from "react";

export default function LoggingDemo() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('inside useEffect', count);
    });
    return (
        <>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </>
    )
}
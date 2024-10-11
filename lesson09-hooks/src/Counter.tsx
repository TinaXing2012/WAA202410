import {useEffect, useRef, useState} from "react";

export default function Counter(){

    const [count, setCount] = useState(0);
    const prevCountRef = useRef<number>(-1);

    useEffect(() => {
        prevCountRef.current = count;
    }, [count]);

    return (
        <>
            <h2>Count: {count}</h2>
            <h2>Previous value of Count: {prevCountRef.current}</h2>
            <button onClick={() => setCount(count+1)}>+1</button>
        </>
    )

}
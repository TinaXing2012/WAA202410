import {useEffect, useState} from "react";

export default function WithDependencyDemo(){
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);
    // num = num + count
    useEffect(() => {
        console.log('inside useEffect');
        setNum(num + count);
    }, [count]);

    return (
        <>
            <h2>Count: {count}</h2>
            <h2>Num: {num}</h2>
            <button onClick={() => setCount(count+1)}>+1</button>
        </>
    )
}
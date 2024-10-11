import {useEffect, useState} from "react";

export default function TimerDemo(){
    // console.log('inside timer demo...');
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timerId = setInterval(() => {
            console.log('inside setInterval....');
            setCount(prev => prev + 1);
        }, 1000);
        return () => {
            clearInterval(timerId);
        }
    }, []);

    return (
        <>
            <h1>Timer Demo</h1>
            <div>Count: {count}</div>
        </>

    )
}
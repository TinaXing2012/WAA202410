import {useEffect, useState} from "react";

export default function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => {
            clearInterval(timerId);
        }
    }, []);

    return (
        <>
            <input type="text"/>
            <p>Current Time: {time.toLocaleTimeString()}<input/></p>
        </>
    )
}
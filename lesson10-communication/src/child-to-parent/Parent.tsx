import Child from "./Child";
import {useState} from "react";

export default function Parent(){
    const [num, setNum] = useState(0);
    const getCount = (count: number) => {
        console.log(count, 'inside parent');
        setNum(count);
    }

    return (
        <>
            <h1>Inside Parent, {num}</h1>
            <Child onData={getCount}/>
        </>
    )
}
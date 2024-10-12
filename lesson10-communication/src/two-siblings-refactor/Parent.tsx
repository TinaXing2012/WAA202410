import ChildA from "./ChildA";
import ChildB from "./ChildB";
import {useState} from "react";

export default function Parent(){
    const [count, setCount] = useState(0);
    return (
        <>
            <h2>Inside Parent</h2>
            <ChildA count={count} onCount={setCount}/>
            <ChildB count={count}/>
        </>
    )
}
import ChildA from "./ChildA";
import ChildB from "./ChildB";
import {useState} from "react";

export default function Parent(){
    const [num, setNum] = useState(0);
    const getCount = (count: number) =>  {
        console.log('count: ', count);
        setNum(count);
    }

    return (
        <>
            <h2>Inside Parent</h2>
            <ChildA onCount={getCount}/>
            <ChildB num={num}/>
        </>
    )
}
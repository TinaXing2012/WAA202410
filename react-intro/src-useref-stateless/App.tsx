import {useRef} from "react";
import Greeting from "./Greeting";

export default function App(){

    const inputRef = useRef<HTMLInputElement>(null);
    const clickHandler = () => {
        console.log(inputRef.current?.focus());
    }

    return (
        <>
            <h1>useRef</h1>
            <input type="text" name="username" ref={inputRef}/>
            <button onClick={clickHandler}>Click Me</button>
            <Greeting name="John"/>
            <Greeting name="Edward"/>
        </>
    )
}
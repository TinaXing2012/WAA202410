import {useState} from "react";
import Child from "./Child";
import Child2 from "./Child2";
import Child3 from "./Child3";

export default function Parent() {
    const [count, setCount] = useState(0);
    const person = {firstname: 'John', lastname: 'Smith'};
    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <hr/>
            <Child count={count} countries={['Canada', 'US']} person={person}/>
            <Child2 {...person}/>
            <Child2 firstname={person.firstname} lastname={person.lastname} />
            <Child3>
                <h2>This is a Children</h2>
                <p>this is a P</p>
            </Child3>
        </>
    )

}
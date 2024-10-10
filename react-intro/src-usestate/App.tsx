import {useState} from "react";
interface User {
    firstname: string;
    lastname: string;
    age: number;
}

export default function App() {
    let [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const [person, setPerson] = useState<User | null>(null);

    const personClickHandler = () => {
        if(person) {
            setPerson({...person, age: person.age + 1}); //shallow
        }
        person && setPerson({...person, age: person.age + 1})
    }
    return (
        <>
            <h1>Use State</h1>
            <h2>Count: {count}</h2>
            <button onClick={increment}>+1</button>

            <h2>Person Info</h2>
            <div>{person?.firstname}, {person?.lastname}, {person?.age}</div>
            <button onClick={personClickHandler}>Change Person</button>
        </>
    )
}
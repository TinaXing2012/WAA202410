import PubSub from 'pubsub-js';
import {useState} from "react";

export default function ChildA() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prev => {
            PubSub.publish('TWOSIBLINGS', prev + 1);
            return prev + 1;
        });
        // PubSub.publish('TWOSIBLINGS', count + 1);
    }

    return (
        <>
            <h2>Inside ChildA</h2>
            <p>Count: {count}</p>
            <button onClick={increment}>+1</button>
        </>
    )
}
import {useCallback, useMemo, useState} from "react";
import Child from "./Child";
import Todo from "./Todo";

export default function App() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState<string[]>(['Todo1', 'Todo2'])

    const addTodo = useCallback(() => {
        setTodos([...todos, 'new Todo']);
    }, [todos]);

    const addTodo2 = useMemo(() => {
        return () => {
            setTodos([...todos, 'new Todo']);
        }
    }, [todos]);


    return (
        <>
            <h1>count: {count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>+1</button>
            <Todo todos={todos} addTodo={addTodo2}/>
            <Child/>
        </>
    )
}
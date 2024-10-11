import {memo} from "react";

type PropsType = {
    todos: string[];
    addTodo: () => void;
}

function Todo(props: PropsType){
    console.log('inside Todo');

    const {todos, addTodo} = props;

    return (
        <>
            <button onClick={addTodo}>Add Todo</button>
            <ul>
                {todos.map((todo, index) => <li key={index}>{todo}</li>)}
            </ul>
        </>
    )
}

export default memo(Todo);
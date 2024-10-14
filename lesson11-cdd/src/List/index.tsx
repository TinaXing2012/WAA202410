import Item from "../Item";
import './index.css';
import Todo from "../types/Todo";

type PropsType = {
    todos: Todo[],
    onUpdateTodo: (newTodo: Todo) => void;
    onDeleteTodo: (id: number | string) => void;
}

export default function List({todos, onUpdateTodo, onDeleteTodo}: PropsType) {
    return (
        <ul className="todo-main">
            {/*{todos.map(todo =>  <Item key={todo.id} id={todo.id} name={todo.name} />)}*/}
            {todos.map(todo => <Item
                key={todo.id}
                {...todo}
                onUpdateTodo={onUpdateTodo}
                onDeleteTodo={onDeleteTodo}
            />)}
        </ul>
    );
}
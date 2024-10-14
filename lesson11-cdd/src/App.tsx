import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import List from "./List";
import {useEffect, useState} from "react";
import Todo from "./types/Todo";

export default function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        async function getTodos(){
            const response = await fetch('http://localhost:3004/todos');
            const data = await response.json();
            setTodos(data);
        }
        getTodos();
    }, []);

    return (
        <div className="todo-container">
            <div className="todo-wrap">
                <Header/>
                <List />
                <Footer/>
            </div>
        </div>
    );
}
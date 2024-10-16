import React, {useRef, useState} from 'react';
import {searchByKeyword} from "./apis/services/search.service";
import './App.css';

export class User {
    id:number;
    login: string;
    avatar_url: string;
    html_url: string;

    constructor(id: number, login: string, avatar_url: string,  html_url: string) {
        this.id = id;
        this.login = login;
        this.avatar_url = avatar_url;
        this.html_url = html_url;
    }
}

function App() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [users, setUsers] = useState<User[]>([]);

    const searchHandler = async () => {
        console.log(inputRef.current?.value);
        const response = await searchByKeyword(inputRef.current?.value);
        setUsers(response.data.items);
    }

    return (
        <div className="container">
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text"
                           placeholder="enter the name you search"
                           ref={inputRef}/>&nbsp;
                    <button onClick={searchHandler}>Search</button>
                </div>
            </section>
            <div className="row">
                {
                    users.map(u => (
                        <div className="card" key={u.id}>
                            <a href={u.html_url} target="_blank">
                                <img src={u.avatar_url} style={{width: 100}}/>
                            </a>
                            <p className="card-text">{u.login}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default App;

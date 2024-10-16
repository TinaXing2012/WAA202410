import React, {useRef, useState} from 'react';
import './App.css';

class User {
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

    const searchHandler = () => {
        console.log(inputRef.current?.value);
        fetch(`https://api.github.com/search/users?q=${inputRef.current?.value}`)
            .then(response => response.json())
            .then(data => setUsers(data.items.map((i: User)=> new User(i.id, i.login, i.avatar_url, i.html_url))));
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
                        <div className="card">
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

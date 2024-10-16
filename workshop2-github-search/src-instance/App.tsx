import React, {useRef, useState} from 'react';
import {searchByKeyword} from "./apis/services/search.service";
import './App.css';


interface User {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;
}

type StateType = {
    isFirst: boolean;
    isLoading: boolean;
    users: User[];
    error: string;
}

const initialState: StateType = {
    isFirst: true,
    isLoading: false,
    users: [],
    error: ''
}

function App() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [search, setSearch] = useState<StateType>(initialState);

    const searchHandler = async () => {
        console.log(inputRef.current?.value);
        setSearch({...search, isFirst: false, isLoading: true});
        try {
            const response = await searchByKeyword(inputRef.current?.value);
            setSearch({...search, isFirst: false, isLoading: false, users: response.data.items});
        } catch (e) {
            setSearch({...search, isFirst: false, isLoading: false, users:[], error: 'Whoops!'});
        }
    }

    const {isFirst, isLoading, users, error} = search;
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
            {
                isFirst ? <p>please enter keyword to start search</p> :
                    isLoading ? <p>Loading</p> :
                        error ? <p>{error}</p> :
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

            }
        </div>
    );
}

export default App;

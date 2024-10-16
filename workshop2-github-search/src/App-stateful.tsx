import React, {useState} from 'react';
import './App.css';

function App() {
    const [keyword, setKeyword] = useState('');
    const searchHandler = () => {
        console.log(keyword);
    }

    return (
        <div className="container">
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text"
                           placeholder="enter the name you search"
                           value={keyword}
                           onChange={(e) => setKeyword(e.target.value)}/>&nbsp;
                    <button onClick={searchHandler}>Search</button>
                </div>
            </section>
            <div className="row">
                <div className="card">
                    <a href="https://github.com/reactjs" target="_blank">
                        <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width: 100}}/>
                    </a>
                    <p className="card-text">reactjs</p>
                </div>
            </div>
        </div>
    );
}

export default App;

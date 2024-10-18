import React from 'react';
import PizzaView from "./features/pizza/PizzaView";
import ChickenView from "./features/chicken/ChickenView";
import UserView from "./features/user/UserView";

function App() {
    return (
        <div className="App">
            <PizzaView/>
            {/*<ChickenView/>*/}
            {/*<UserView/>*/}
        </div>
    );
}

export default App;

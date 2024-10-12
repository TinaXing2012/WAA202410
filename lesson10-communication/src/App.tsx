import Parent from "./two-siblings-pubsub/Parent";
import Home from './context-demo/Home';
import {ThemeProvider} from "./context-demo/ThemeContext";
import {useState} from "react";
import ToggleTheme from "./context-demo/ToggleTheme";

function App() {

    return (
        <>
            <ThemeProvider>
                <Home />
            </ThemeProvider>

            {/*<h1>Parent-to-Child</h1>*/}
            {/*<Parent/>*/}
            {/*<h1>Child-to-Parent</h1>*/}
            {/*<Parent />*/}
            {/*<h1>Two Silbings</h1>*/}
            {/*<Parent />*/}
            {/*<h1>Two Silbings - State lifting up</h1>*/}
            {/*<Parent />*/}
            {/*<h1>Two Silbings - PubSub</h1>*/}
            {/*<Parent/>*/}
        </>
    );
}

export default App;
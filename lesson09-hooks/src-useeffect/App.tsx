import FetchDemo from "./FetchDemo";
import LoggingDemo from "./LoggingDemo";
import WithDependencyDemo from "./WithDependencyDemo";
import TimerDemo from "./TimerDemo";
import {useState} from "react";

export default function App() {
    const [toggle, setToggle] = useState(true);

    return (
        <>
            <div>
                <button onClick={() => setToggle(!toggle)}>Toggle</button>
            </div>
            {/*<FetchDemo />*/}
            {/* <LoggingDemo />*/}
            {/* <WithDependencyDemo />*/}
            {/*{toggle}*/}
            {/*/!*{toggle ? <TimerDemo/> : ''}*!/*/}
            {/*{toggle && <TimerDemo />}*/}
            {toggle && 'Hello'}
        </>
    )
}
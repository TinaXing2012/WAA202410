import {ChangeEvent, MouseEvent} from "react";

function clickHanlder2(){
    console.log('again again');
}
export default function App(){

    const clickHandler = function (){
        console.log('Whoops!');
    }

    const clickHanlder3 = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(e.target);
    }

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.name, e.target.value);
    }

    const clickHander4 = (username: string, e: MouseEvent<HTMLButtonElement>) => {
        console.log(`welcome ${username}`)
        console.log(e);
        //return undefined
    }

    const clickHander5 = (username: string) => {
        let a = 10;
        return () => {
            console.log(`welcome! ${username}`, a++);
        }
    }

    return (
        <>
            <h1>Responding to Events</h1>
            <h1>Pass custom params</h1>

            <button onClick={(e) => clickHander4('John', e)}>Pass Custom Params</button>
            <button onClick={clickHander5('John')}>Pass Custom Params 2</button>

            <hr/>
            <button onClick={clickHanlder3}>Click to see event object</button>
            <input name="username" onChange={changeHandler}/>
            <hr/>
            <section>
                <button onClick={clickHandler}>Click Me</button>
                <button onClick={() => console.log('still works')}>Click me again</button>
                <button onClick={clickHanlder2}>Click me again again</button>
                <div onClick={() => console.log('button X3 is clicked!')}>
                    <p>=========</p>
                    <button onClick={() => console.log('my own X3 is clicked!')}>Click me again X 3!</button>
                    <p>------------</p>
                </div>
            </section>

        </>
    )
}
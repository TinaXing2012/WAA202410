import './App.css'
import Abc from './Abc'

export default function App() {
    console.log("Inside App");
    let header = 'Hello World!!!!!';
    const fruits = ['apple', 'banana', 'pear'];
    const person = {firstname: 'John', lastname: 'Smith'};
    const i = 10;
    let foo = function (){
        return "Whoops!";
    }
    //
    const str = foo();
    return (
        <>
            <h1 className="container">{header}</h1>
            <ul style={{color: 'yellow', fontSize: '59px'}}>
                {fruits.map(f => <li key={f}>{f}</li> )}
            </ul>
            <p>{foo()}</p>
            {/*<p>{person}</p>*/}
            <input type="password"/>
            <Abc></Abc>
        </>
    );
}
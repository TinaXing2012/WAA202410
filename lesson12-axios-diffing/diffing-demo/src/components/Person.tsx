import {useState} from "react";

export default function Person(){
    const [persons, setPersons] = useState([
        {id: 1, firstname: 'John', lastname: 'Smith'},
        {id: 2, firstname: 'Edward', lastname: 'Doe'}
    ]);

    const addNewPerson = () => {
        setPersons([{id:persons.length+1, firstname: 'Lily', lastname: 'Jack'},...persons ]);
    }

    return (
        <div>
            <ul>
                {persons.map((p, index) =>
                    <li key={p.id}>
                        {p.firstname}, {p.lastname}
                        <input/>
                    </li>)}
            </ul>
            <button onClick={addNewPerson}>+person</button>
        </div>
    )
}
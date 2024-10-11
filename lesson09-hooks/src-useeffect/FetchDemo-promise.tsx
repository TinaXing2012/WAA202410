import {useEffect, useState} from "react";

interface User {
    id: number,
    name: string;
}

export default function FetchDemo() {
    // const [users, setUsers] = useState<Array<User>>([]);
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetch('https://tinaxing2012.github.io/jsons/data.json')
            .then(response => response.json())
            .then(result => {
                console.log('inside then.....');
                setUsers(result.data.channels);
            });
    }, []);

    return (
        <>
            <ul>
                {users.map(u => <li key={u.id}>{u.name}</li>)}
            </ul>
        </>
    )

}
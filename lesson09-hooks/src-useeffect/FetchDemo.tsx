import {useEffect, useState} from "react";

interface User {
    id: number,
    name: string;
}

export default function FetchDemo() {
    console.log('fetch demo...');
    // const [users, setUsers] = useState<Array<User>>([]);
    const [users, setUsers] = useState<User[]>([]);

    const fetchUsers = async () => {
        const response = await fetch('https://tinaxing2012.github.io/jsons/data.json');
        const result = await response.json();
        setUsers(result.data.channels);
    }
    useEffect(() => {
        console.log('inside useEffect..');
        fetchUsers();
    }, []);

    return (
        <>
            <ul>
                {users.map(u => <li key={u.id}>{u.name}</li>)}
            </ul>
        </>
    )

}
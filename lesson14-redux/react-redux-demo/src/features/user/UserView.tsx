import {useAppDispatch, useAppSelector} from "../../app/hook";
import {useEffect} from "react";
import {fetchUsers} from "./userSlice";

export default function UserView() {

    const {loading, users, error} = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <>
            {
                loading ? <h2>Loading</h2> :
                    error ? <h2>{error}</h2> :
                        users.length === 0 ? <h2>No user list</h2> :
                            <ul>
                                {users.map(u => <li key={u.id}>{u.id}, {u.name}</li>)}
                            </ul>
            }

        </>
    )
}
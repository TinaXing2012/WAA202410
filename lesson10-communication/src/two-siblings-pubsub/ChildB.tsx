import PubSub from 'pubsub-js';
import {useEffect, useState} from "react";

export default function ChildB(){
    const [data, setData] = useState(0);
    useEffect(() => {
        PubSub.subscribe('TWOSIBLINGS', (msg, data) => {
            console.log(msg, data);
            setData(data);
        })
    }, []);

    return (
        <>
            <h2>Inside ChildB: {data}</h2>
        </>
    )
}
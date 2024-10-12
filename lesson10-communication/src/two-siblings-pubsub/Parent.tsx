import ChildA from "./ChildA";
import ChildB from "./ChildB";
import {useState} from "react";

export default function Parent() {
    return (
        <>
            <h2>Inside Parent</h2>
            <ChildA />
            <ChildB />
        </>
    )
}
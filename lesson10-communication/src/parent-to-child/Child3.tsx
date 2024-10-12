import {ReactNode} from "react";

type PropsType = {
    children: ReactNode
}

export default function Child3(props: PropsType) {
    const {children} = props;
    return (
        <>
            {children}
        </>
    )
}
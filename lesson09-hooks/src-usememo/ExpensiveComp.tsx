import {useMemo} from "react";

export default function ExpensiveComp({num}: {num: number}){

    const result = useMemo(() => {
        console.log('Expensive calculation running...');
        // Simulate an expensive calculation
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
            result += i * num;
        }
        return result;
    }, [num]);


    return (
        <>
            <h1>Expensive: {result}</h1>
        </>
    )
}
type PropsType = {
    count: number;
    onCount: (count: number) => void
}

export default function ChildA(props: PropsType){
    const {count, onCount} = props;
    return (
        <>
            <h2>Inside ChildA</h2>
            <p>Count: {count}</p>
            <button onClick={() => onCount(count + 1)}>+1</button>
        </>
    )
}
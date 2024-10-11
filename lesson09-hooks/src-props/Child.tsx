type propsType = {
    counter: number;
    str: string;
    age: number;
}

export default function Child(props:propsType){
    const {counter, str, age} = props;
    return (
        <>
            <h1>Child</h1>
            <h2>Count: {counter}, {str}, {age}</h2>
        </>
    )
}
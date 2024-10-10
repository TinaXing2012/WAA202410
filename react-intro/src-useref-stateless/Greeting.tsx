type PropsType = {
    name: string
}

export default function Greeting(props: PropsType) {
    const {name} = props;
    return <h1>Welcome, {name}</h1>
}
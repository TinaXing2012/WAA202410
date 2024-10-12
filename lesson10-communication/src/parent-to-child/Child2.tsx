type PropsType = {
    firstname: string,
    lastname: string
}

export default function Child2({firstname, lastname}: PropsType) {
    return <p>Firstname: {firstname}, {lastname}</p>
}
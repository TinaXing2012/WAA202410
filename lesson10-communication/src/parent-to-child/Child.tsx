type PropsType = {
    count: number;
    countries: string[]
    person: {
        firstname: string,
        lastname: string
    }
}

export default function Child(props: PropsType) {
    const {count, countries, person} = props;
    return (
        <>
            <p>Count in Child: {count}</p>
            <ul>
                {countries.map((c, index) => <li key={index}>{c}</li>)}
            </ul>
            <p>Firstname: {person.firstname}, {person.lastname}</p>
        </>
    )
}
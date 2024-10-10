import {MouseEvent, useRef} from "react";

export default function App() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const textareRef = useRef<HTMLTextAreaElement>(null);

    const register = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(usernameRef.current?.value,
            passwordRef.current?.value,
            textareRef.current?.value);
    }

    return (
        <>
            <form>
                <p>
                    Username: <input ref={usernameRef}/>
                </p>
                <p>
                    Password: <input type="password" ref={passwordRef}/>
                </p>
                <p>
                    Bio: <textarea ref={textareRef}></textarea>
                </p>
                <button onClick={register}>Register</button>
            </form>
        </>
    )
}
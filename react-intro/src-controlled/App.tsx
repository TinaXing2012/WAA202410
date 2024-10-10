import {ChangeEvent, FormEvent, useState} from "react";

export default function App(){
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        bio:''
    });

    const handleUsernameInput = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, username: e.target.value});
    }

    const handlePasswordInput = (e:ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, password: e.target.value});
    }

    const handleTextareInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({...formData, bio: e.target.value});
    }

    const handleInput = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        setFormData({ username: '', password: '', bio: ''})
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <p>
                    Username: <input value={formData.username}
                                     name="username"
                                     onChange={handleInput}/>
                </p>
                <p>
                    Password: <input type="password"
                                     value={formData.password}
                                     name="password"
                                     onChange={handleInput}/>
                </p>
                <p>
                    Bio: <textarea value={formData.bio}
                                   name="bio"
                                   onChange={handleInput}></textarea>
                </p>
                <button>Register</button>
            </form>
        </>
    )
}
import {FormEvent, useReducer, useState} from "react";

interface StateType {
    username: string;
    password: string;
    error: string;
    isLoggedIn: boolean;
}

const initialState: StateType = {
    username: '',
    password: '',
    error: '',
    isLoggedIn: false
}

type ActionType = {
    type: string;
    payload?: any;
}

const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'SET_USERNAME':
            return {...state, username: action.payload};
        case 'SET_PASSWORD':
            return {...state, password: action.payload};
        case 'SET_ERROR':
            return {...state, error: action.payload};
        case 'LOGIN':
            return {...state, isLoggedIn: true};
        case 'RESET':
            return {...state, error: '', username: '', password: ''};
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
}

export default function LoginUseReducer() {

    const [state, dispatch] = useReducer(reducer, initialState);

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({type: 'SET_ERROR', payload: ''});
        try {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (username === 'user' && password === 'pwd123') {
                        resolve('success');
                    } else {
                        reject('fail');
                    }
                }, 1000);
            });
            dispatch({type: 'LOGIN'});

        } catch (error) {
            dispatch({type: 'SET_ERROR', payload: 'Incorrect username or password!'});
            dispatch({type: 'RESET'});
        }
    };

    const {username, password, isLoggedIn, error} = state;

    return (
        <div className='App'>
            <div className='login-container'>
                {isLoggedIn ? (
                    <>
                        <h1>Welcome {username}!</h1>
                        <button onClick={() => dispatch({type: 'LOGOUT'})}>Log Out</button>
                    </>
                ) : (
                    <form className='form' onSubmit={onSubmit}>
                        {error && <p className='error'>{error}</p>}
                        <p>Please Login!</p>
                        <input
                            type='text'
                            placeholder='username'
                            value={username}
                            onChange={(e) => dispatch({type: 'SET_USERNAME', payload: e.currentTarget.value})}
                        />
                        <input
                            type='password'
                            placeholder='password'
                            autoComplete='new-password'
                            value={password}
                            onChange={(e) => dispatch({type: 'SET_PASSWORD', payload: e.currentTarget.value})}
                        />
                        <button className='submit' type='submit'>Log In</button>
                    </form>
                )}
            </div>
        </div>
    );


}
import { useEffect, useState } from 'react';
import login from '../assets/logos/cube.svg'
import '../styles/Login.scss'
import {useNavigate} from 'react-router-dom';

export const Login = () => {
    const password = "ilyMatthew&Robert"
    const navigator = useNavigate();

    const [index, setIndex] = useState(0);
    const onSubmit = () => {
        navigator('/desktop');
    }

    useEffect(() => {
         const id = setTimeout(() => {
            if (index >= password.length) return;
            setIndex(prev => ++prev)
        }, 100)
        return () => clearTimeout(id);
        
    }, [index])

    return (
        <section className='login'>
            <div className="img-container">
                <img src={login}></img>
            </div>
            <div className='password-container'>
                <input type='password' value={password.slice(0, index)} disabled={true}></input>
                <button onClick={onSubmit}>Confirm</button>
            </div>
        </section>
    )
}

// maybe allow them to type? and error page if it fails x times
// deleting the computer folder will cause a valid crash out
// maybe if they stay in the login screen for a while it'll do 

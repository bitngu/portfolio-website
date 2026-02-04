import { useState, useEffect } from 'react';
import '../styles/Landing.scss';
import { Loading } from './Loading';
import { Login } from './Login';
import windowsXPAudio from '/assets/audio/windows-xp-startup.mp3';
import { Intro } from './Intro';

export const Landing = (): React.ReactNode => {
    const [intro, setIntro] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const action = () => {
            if (!loading) {
                setIntro(false);
                setLoading(true);
            }
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                action()
            }
        }

        const handleClick = () => {
            action();
        }

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('click', handleClick);
      
        const id = setTimeout(() => {
            if (!intro) {
                setLoading(prevState => !prevState);
            }
        }, 5000);
        
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('click', handleClick);
            clearTimeout(id)
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [intro]);


    return (
        <section id='landing-page'>
            {loading && <audio controls autoPlay hidden> 
                <source src={windowsXPAudio} type="audio/mp3" />
            </audio>}
            {intro ? <Intro/> : (loading ? <Loading/> : <Login/>)}
        </section>
    )
}
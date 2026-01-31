import { useEffect, useState } from 'react';
import '../styles/Overlay.scss';

export const Overlay = () => {

    // Number of lines is dependent on the css of the height + margin-bottom of the hr
    const [numLines, setNumLines] = useState(Math.floor(window.innerHeight / 3));
    

    useEffect(() => {
        const handleResize = () => {setNumLines(Math.floor(window.innerHeight / 3))}
        document.addEventListener('resize', handleResize)

        return () => {document.removeEventListener('resize', handleResize)};
    }, []);

    return (<div className="overlay">
        <div className='hr-container'>
        {Array.from({length: numLines}, (_, index)=> {            
            return <div key={index} className={`hr  ${index % 2=== 0 ? 'even': 'odd'} `}></div>
        })}
        </div>
    </div>)
}
import '../styles/MediaViewer.scss';
import { MediaModal } from './MediaModal';
import { useState } from 'react';

type MediaViewerProps = {
    id: string,
    className?: string,
    type?: 'img' | 'vid',
    data: unknown[],

}

export const MediaViewer = (props: MediaViewerProps): React.ReactNode => {
    const [toggle, setToggle] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const onClick = (event) => {
        console.log('click', toggle);
        setToggle(prevToggle => !prevToggle);
    }

    const navigateMedia = (mode: 'NEXT' | 'PREV') => {
        if (mode === 'NEXT' && currentIndex < props.data.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else if (mode === 'PREV' && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }

        console.log('navigateMedia', currentIndex);
    }

    console.log('currentIndex: ', currentIndex);

    return (
        <div id={props.id} className={`media-viewer-wrapper ${props.className ? props.className : ''}`} >
            <div id={`${props.data[currentIndex].path}`} className='content' onDoubleClick={event => event.preventDefault()}>
                    {currentIndex > 0 && <button className='left-arrow' onClick={() => navigateMedia('PREV')}> &#8592; </button>}
                    <div className='img-wrapper' onClick={onClick}>
                        <img src={props.data[currentIndex].path}></img>
                    </div>
                    {currentIndex < (props.data.length - 1) && <button className='right-arrow' onClick={() => navigateMedia('NEXT')}> &#8594; </button>}
                </div>
            {toggle && <MediaModal data={props.data} currentIndex={currentIndex} closeCallback={onClick} navigateMediaCallback={navigateMedia}></MediaModal>}
        </div>
    );

}
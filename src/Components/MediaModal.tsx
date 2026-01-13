
import '../styles/MediaModal.scss';
import dummy from '../assets/fake/test1.png';

type MediaModalProps = {
    data: unknown[],
    currentIndex: number,
    closeCallback?: () => void;
    navigateMediaCallback?: () => void;
}


export const MediaModal = (props: MediaModalProps) => {

    const onClick = (event) => {
        console.log('mediamodal clicked close');

        if (typeof props.closeCallback === 'function') {
            props.closeCallback();
        }
    }

    const navigateMedia = (mode: 'NEXT' | 'PREV') => {
        console.log('modal navigate', mode);
        if (typeof props.navigateMediaCallback === 'function') {
            props.navigateMediaCallback(mode);
        }
    }

    return (
        <div className='media-viewer-modal-wrapper'>
            <div className='media-viewer-modal'>
                <div className='content'>
                    <button className='close' onClick={onClick}> X </button>
                    {props.currentIndex > 0 && <button className='left-arrow' onClick={() => navigateMedia('PREV')}> &#8592; </button>}
                    <div className='img-wrapper'>
                        <img src={props.data[props.currentIndex].path}></img>
                    </div>
                    {props.currentIndex < (props.data.length - 1) && <button className='right-arrow' onClick={() => navigateMedia('NEXT')}> &#8594; </button>}
                    <div className='carousel-dots'>
                        {props.data.length > 1 && Array.from({length: props.data.length}, (_, index) => {
                            return <button className={props.currentIndex === index ? 'active' : ''} onClick={onClick}> &#8226; </button>
                            }
                        )}
                    </div>
                </div>
            </div>

        </div>
    )
}
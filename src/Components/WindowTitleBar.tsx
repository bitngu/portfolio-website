import { appService, type TaskbarData } from '../classes/AppData'
import '../styles/WindowTitleBar.scss'


export const WindowTitleBar = (props: TaskbarData) => {

    const minimizeWindow = () => {        
        appService.activeAppId = '';
    }

    const expandWindow = () => {

    }

    const closeWindow = () => {
        appService.removeActiveApp(props);
    }

    return (
        <div className="title-bar">
            <div className="title-bar--content">
                <div className="icon">
                    <img src={props.icon}/>
                </div>
                <span>{props.displayName}</span>
            </div>
            <div className='title-bar--controls'>
                <button type='button' className='minimize' onClick={minimizeWindow}></button>
                <button type='button' className='expand' onClick={expandWindow}></button>
                <button type='button' className='close' onClick={closeWindow}></button>
            </div>
        </div>
    )
}
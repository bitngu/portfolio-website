import { appService, type TaskbarData } from '../classes/AppData'
import '../styles/WindowTitleBar.scss'
import {type MouseEvent } from 'react'


export const WindowTitleBar = (props: TaskbarData) => {

    const minimizeWindow = () => {        
        appService.activeAppId = '';
    }

    const expandWindow = () => {

    }

    const closeWindow = (event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        appService.removeActiveApp(props);
    }

    return (
        <div className='title-bar-wrapper'>
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
                    <button type='button' className='close' onClick={event => closeWindow(event)}></button>
                </div>
            </div>
            {props.showWindowMenu && <div className='title-bar-menu'>
                    <button type='button'> <span>F</span>ile</button>
                    <button type='button'> <span>E</span>dit</button>
                    <button type='button'> <span>V</span>iew</button>
                    <button type='button'> F<span>a</span>vorite</button>
                    <button type='button'> <span>T</span>ools</button>
                    <button type='button'> <span>H</span>elp</button>
            </div>}
        </div>
    )
}
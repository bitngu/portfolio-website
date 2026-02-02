import { appService, type TaskbarData } from '../classes/AppData'
import '../styles/WindowTitleBar.scss'
import { useCallback, useEffect, useRef, useState } from 'react'


type WindowTitleBarProps = {
    task: TaskbarData;
    onMouseMove?: (top: number, left: number) => void;
}


export const WindowTitleBar = (props: WindowTitleBarProps) => {
    const barRef = useRef<HTMLDivElement>(null);
    const offsetRef = useRef({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);

    const minimizeWindow = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        appService.minimizeApp(props.task);
    }

    const expandWindow = () => {

    }

    const closeWindow = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        appService.removeActiveApp(props.task);
    }


    const onMouseMove = useCallback((event: MouseEvent) => {
        if (isDragging && typeof props.onMouseMove === 'function') {
            const top = event.clientY - offsetRef.current.y;
            const left = event.clientX - offsetRef.current.x;
            props.onMouseMove(top, left);
        }

    }, [props, isDragging])

    const onMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        const rect = barRef.current?.getBoundingClientRect();
        if (rect) {
            offsetRef.current = {
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            };
        }

        if (!isDragging) {
            setIsDragging(true);
        }
    }

    const onMouseUp = useCallback(() => {
        if (isDragging){
            setIsDragging(false);
        }
    }, [isDragging])

    useEffect(() => {
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);

        return () => {
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('mousemove', onMouseMove);
        }

    }, [onMouseUp, onMouseMove])

    return (
        <div className='title-bar-wrapper'>
            <div className="title-bar" ref={barRef} onMouseDown={onMouseDown}>
                <div className="title-bar--content">
                    <div className="icon">
                        <img src={props.task.icon} />
                    </div>
                    <span>{props.task.displayName}</span>
                </div>
                <div className='title-bar--controls'>
                    <button type='button' className='minimize' onClick={event => minimizeWindow(event)} onMouseDown={event => event.stopPropagation()}></button>
                    <button type='button' className='expand' onClick={expandWindow} onMouseDown={event => event.stopPropagation()}></button>
                    <button type='button' className='close' onClick={event => closeWindow(event)} onMouseDown={event => event.stopPropagation()}></button>
                </div>
            </div>
            {props.task.showWindowMenu && <div className='title-bar-menu'>
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
import '../styles/Taskbar.scss'
import { useEffect, useState } from "react";
import { TaskbarItem } from "../Components/TaskbarItem"
import network from '/assets/taskbar/network.png'
import volume from '/assets/taskbar/volume.png'
import msn from '/assets/taskbar/msn.png'
import calculator from '/assets/taskbar/calculator.png'
import documents from '/assets/taskbar/documents.png'
import ie from '/assets/taskbar/internet_explorer.png'
import paint from '/assets/taskbar/paint.png'

import { StartMenu } from './StartMenu';


export const Taskbar = (): React.ReactNode => {
     const updateTime = (): string => {
        const now = new Date();
        return now.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    }

    const [time, setTime] = useState(updateTime());

    useEffect(() => {

        const intervalID = setInterval(() => {
            setTime(updateTime);
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, [])


    return (
        <footer id='taskbar'>
            <div className="app-list">
                <StartMenu />
                <div className='pinned-items'>
                    <TaskbarItem {...{ icon: msn, className: 'msn' }}></TaskbarItem>
                    <TaskbarItem {...{ icon: calculator, className: 'calculator' }}></TaskbarItem>
                    <TaskbarItem {...{ icon: documents, className: 'documents' }}></TaskbarItem>
                    <TaskbarItem {...{ icon: paint, className: 'paint' }}></TaskbarItem>
                </div>
            </div>
            <div className="misc">
                <TaskbarItem {...{ icon: network, className: 'network' }}></TaskbarItem>
                <TaskbarItem {...{ icon: volume, className: 'volume' }}></TaskbarItem>
                <TaskbarItem {...{ content: time, showName: true, className: 'locale-clock' }}></TaskbarItem>
            </div>
        </footer>
    )
}
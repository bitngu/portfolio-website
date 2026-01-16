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
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(updateTime);
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, [])

    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth);

        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    })


    const startMenuClick= () => {
        console.log('StartMenuClicked');
    }

    // const onClick = () => {
    //     setActive(())
    // }

    // can be overridden if item is active
    const hideContentOnSMobile = width < 480;
    const hideContentOnLMobile = width < 576;

    


    return (
        <footer id='taskbar'>
            <div className="app-list">
                <StartMenu onClick={startMenuClick}/>
                {width >= 768 && <div className='pinned-items'>
                    <TaskbarItem {...{ icon: msn, className: 'msn' }}></TaskbarItem>
                    <TaskbarItem {...{ icon: calculator, className: 'calculator' }}></TaskbarItem>
                    <TaskbarItem {...{ icon: documents, className: 'documents' }}></TaskbarItem>
                    <TaskbarItem {...{ icon: paint, className: 'paint' }}></TaskbarItem>
                </div>}
                <div className='active-apps'>
                    <TaskbarItem {...{ content: 'About', icon: ie, className: 'active-ie', hide: {content: hideContentOnSMobile}}}></TaskbarItem>
                    <TaskbarItem {...{ content: 'About', icon: ie, className: 'active-ie', hide: {content: hideContentOnSMobile}}}></TaskbarItem>
                    <TaskbarItem {...{ content: 'About', icon: ie, className: 'active-ie', hide: {content: hideContentOnSMobile}}}></TaskbarItem>
                    <TaskbarItem {...{ content: 'About', icon: ie, className: 'active-ie', hide: {content: hideContentOnSMobile}}}></TaskbarItem>
                    <TaskbarItem {...{ content:'Portfolio', icon: documents, className: 'documents', hide: {content: hideContentOnSMobile}}}></TaskbarItem>
                    {/* should be mail */}
                    <TaskbarItem {...{ content: 'Contact', icon: paint, className: 'paint', hide: {content: hideContentOnSMobile}}}></TaskbarItem>
                </div>
            </div>
            <div className="misc">
                <TaskbarItem {...{ icon: network, className: 'network', hide: {icon: hideContentOnLMobile}}}></TaskbarItem>
                <TaskbarItem {...{ icon: volume, className: 'volume', hide: {icon: hideContentOnLMobile}}}></TaskbarItem>
                <TaskbarItem {...{ content: time, showName: true, className: 'locale-clock'}}></TaskbarItem>
            </div>
        </footer>
    )
}
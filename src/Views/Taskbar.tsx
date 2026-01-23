import '../styles/Taskbar.scss'
import { useEffect, useState } from "react";
import { TaskbarItem } from "../Components/TaskbarItem"
import network from '/assets/taskbar/network.png'
import volume from '/assets/taskbar/volume.png'
import matthew from '/assets/taskbar/kitty.png'
import { StartMenu } from './StartMenu';
import { appService, calculatorApp, notepadApp, paintApp} from '../classes/AppData';


export const Taskbar = (): React.ReactNode => {

     const fullFormat = (time: string): string => {
        const now = new Date(time);
        return now.toLocaleTimeString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    }

    const timeFormat = (time: string): string => {
        const now = new Date(time);
        return now.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    }

    const [time, setTime] = useState(new Date().toISOString());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date().toISOString());
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, [])

    const startMenuClick= () => {
        console.log('StartMenuClicked');
    }

    return (
        <footer id='taskbar'>
            <div className="app-list">
                <StartMenu onClick={startMenuClick}/>
                <div className='pinned-items'>
                    {[notepadApp, calculatorApp, paintApp].map(app => {
                        return <TaskbarItem key={app.id + 'pinned-item'} task={{...app, hideName: true}}/>
                    })}
                </div>
                <div className='active-apps'>
                    {appService.activeApps.map(app => {
                        return <TaskbarItem key={app.id + 'active-apps'} task={app} />
                    })}
                </div>
            </div>
            <div className="feline-buddy">
                <TaskbarItem task={{id: 'matthew', icon: matthew, displayName:'Matthew', hideName: true, clickable: false, noHover: true}}/>
            </div>
            <div className="misc">
                <TaskbarItem task={{id: 'network', icon: network, displayName:'Network', hideName: true, noHover: true}}/>
                <TaskbarItem task={{id: 'volume', icon: volume, displayName: 'Volume', hideName: true, noHover: true}}/>
                <TaskbarItem task={{id: 'clock', icon: '', displayName: timeFormat(time), hoverText: fullFormat(time), hideIcon: true, noHover: true }} />
            </div>
        </footer>
    )
}
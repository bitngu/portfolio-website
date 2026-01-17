import '../styles/Taskbar.scss'
import { useEffect, useState } from "react";
import { TaskbarItem } from "../Components/TaskbarItem"
import network from '/assets/taskbar/network.png'
import volume from '/assets/taskbar/volume.png'
import { StartMenu } from './StartMenu';
import { appService, calculatorApp, msnApp, paintApp} from '../classes/AppData';


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

    const startMenuClick= () => {
        console.log('StartMenuClicked');
    }

    return (
        <footer id='taskbar'>
            <div className="app-list">
                <StartMenu onClick={startMenuClick}/>
                <div className='pinned-items'>
                    {[msnApp, calculatorApp, paintApp].map(app => {
                        return <TaskbarItem key={app.id + 'pinned-item'} task={{...app, hideName: true}}/>
                    })}
                </div>
                <div className='active-apps'>
                    {appService.activeApps.map(app => {
                        return <TaskbarItem key={app.id + 'active-apps'} task={app}/>
                    })}
                </div>
            </div>
            <div className="misc">
                <TaskbarItem task={{id: 'network', icon: network, displayName:'Network', hideName: true}}/>
                <TaskbarItem task={{id: 'volume', icon: volume, displayName: 'Volume', hideName: true}}/>
                <TaskbarItem task={{id: 'clock', icon: '', displayName: time, hideIcon: true}}/>
            </div>
        </footer>
    )
}
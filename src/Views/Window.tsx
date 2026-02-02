import '../styles/Window.scss'
import { appService, type TaskbarData } from "../classes/AppData"
import { WindowTitleBar } from "../Components/WindowTitleBar"
import { useReducer } from 'react'


export const Window = (): React.ReactNode => {
    const [, forceUpdate] = useReducer((x) => x + 1, 0);

    const onClick = (app: TaskbarData) => {
        appService.addActiveApp(app);
    }

    const onMouseMove = (app: TaskbarData, top: number, left: number) => {
        app.windowPos = { top, left };
        forceUpdate();
    }

    return (
        appService.activeApps.map(app => {
            let left = app.windowPos?.left
            if (app.minimize) {
                const element = document.querySelector(`.taskbar-${app.id}`)
                left = element?.getBoundingClientRect().left
            }

            return (
                app.windowApp && <div key={`${app.id} window`} className={`window ${app.id} ${app.id === appService.activeAppId ? 'active' : ''} ${!app.windowPos ? 'start' : ''} ${app.minimize ? 'minimize' : ''}`} onClick={() => onClick(app)} style={{ top: app.windowPos?.top, left: left }} >
                    <WindowTitleBar task={app} onMouseMove={(x, y) => onMouseMove(app, x, y)} />
                    <div className="window-body">
                        {app.windowApp}
                    </div>
                </div>
            )
        }))
}
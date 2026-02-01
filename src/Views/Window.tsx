import '../styles/Window.scss'
import { appService, type TaskbarData } from "../classes/AppData"
import { WindowTitleBar } from "../Components/WindowTitleBar"

export const Window = (): React.ReactNode => {
    const onClick = (app: TaskbarData) => {
        appService.addActiveApp(app);
    }

    return (
        appService.activeApps.map(app => {
            return (
            app.windowApp && <div key={`${app.id} window`} className={`window ${app.id} ${app.id === appService.activeAppId ? 'active': ''}`} onClick={() => onClick(app)} >
                <WindowTitleBar {...app}/>
                <div className="window-body">
                    {app.windowApp}
                </div>
            </div>
        )}))
}
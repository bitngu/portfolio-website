import { appService, type TaskbarData } from '../classes/AppData';
import '../styles/DesktopItem.scss'

type DesktopItemProps = {
    task: TaskbarData;
    className?: string;
    onDrag?: () => void;
}

export const DesktopItem = (props: DesktopItemProps): React.ReactNode => {

    return (
        <div className={`desktop-item ${props.className ? props.className : ''}`} onClick={()=> appService.addActiveApp(props.task)} draggable={true}>
            <div className="icon-container">
                <img src={props.task.icon} />
            </div>
            <p>{props.task.displayName}</p>
        </div>
    )
}
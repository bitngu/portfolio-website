import { appService, type TaskbarData } from '../classes/AppData';
import '../styles/TaskbarItem.scss';

type TaskbarItemProps = {
    task: TaskbarData;
}


export const TaskbarItem = (props: TaskbarItemProps) => {
    return (
        <div className={`taskbar-item ${props.task.id === appService.activeAppId ? 'active': ''}`} onClick={() => appService.addActiveApp(props.task)} title={props.task.hoverText ? props.task.hoverText : props.task.displayName}>
            {!props.task.hideIcon && <div className="icon-container">
                <img src={props.task.icon} alt={props.task.displayName}></img>
            </div> }
            {!props.task.hideName && <div className="displayName">{props.task.displayName}</div>}
        </div>
    )

}
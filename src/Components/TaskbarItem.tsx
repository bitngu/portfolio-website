import '../styles/TaskbarItem.scss';

type TaskbarItemProps = {
    className?: string;
    content?: string;
    icon?: string;
    onClick?: () => void;
    showName?: boolean;
}

export const TaskbarItem = (props: TaskbarItemProps) => {
    return (
        <div className={`taskbar-item ${props.className ? props.className : ''}`}>
            {props.icon ? <div className="icon-container">
                <img src={props.icon}></img>
            </div> : null}
            {props.content ? <div className="content">{props.content}</div> : null}
        </div>
    )

}
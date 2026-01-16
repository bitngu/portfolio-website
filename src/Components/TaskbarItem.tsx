import '../styles/TaskbarItem.scss';

type TaskbarItemProps = {
    className?: string;
    content?: string;
    icon?: string;
    onClick?: () => void;
    hide?: {icon?: boolean; content?: boolean}
    active?: boolean;
}


export interface TaskbarData {
    content: string;
    icon: string;
    active?: boolean;
    open?: boolean;
    onClick?: ()=> void;
}

export const TaskbarItem = (props: TaskbarItemProps) => {

    const onClick = () => {
        console.log('bello');
        if (typeof props.onClick === 'function'){

        }
    }

    return (
        <div className={`taskbar-item ${props.className ? props.className : ''} ${props.active ? 'active': ''}`} onClick={onClick}>
            {(!props.hide?.icon && props.icon) ? <div className="icon-container">
                <img src={props.icon}></img>
            </div> : null}
            {(!props.hide?.content && props.content ) ? <div title={props.content} className="content">{props.content}</div> : null}
        </div>
    )

}
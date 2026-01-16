import '../styles/DesktopItem.scss'

type DesktopItemProps = {
    name: string;
    icon: string;
    className?: string;
    onClick?: () => void;
    onDrag?: () => void;
}

export const DesktopItem = (props: DesktopItemProps): React.ReactNode => {
    return (
        <div className={`desktop-item ${props.className ? props.className : ''}`}>
            <div className="icon-container">
                <img src={props.icon} />
            </div>
            <p>{props.name}</p>
        </div>
    )
}
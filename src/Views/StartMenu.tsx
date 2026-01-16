import '../styles/StartMenu.scss'
import xp from '/assets/taskbar/xp.png'

type StartMenuProps = {
    onClick?: ()=> void;
}

export const StartMenu = (props: StartMenuProps): React.ReactNode => {

    const onClick = () => {
        
        if (typeof props.onClick === 'function'){
            props.onClick();
        }


    }

    return (
        <div className="start-menu" onClick={onClick}>
            <div className="xp-logo">
                <img src={xp} alt='xp-logo'/>
            </div>
            <span>start</span>
        </div>
    )
}
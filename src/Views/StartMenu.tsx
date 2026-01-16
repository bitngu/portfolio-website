import '../styles/StartMenu.scss'
import xp from '/assets/taskbar/xp.png'

// why suddenly i'm no longer able to import scss?

type StartMenuProps = {
    onClick?: ()=> void;
}

export const StartMenu = (): React.ReactNode => {
    return (
        <div className="start-menu">
            <div className="xp-logo">
                <img src={xp} alt='xp-logo'/>
            </div>
            <span>start</span>
        </div>
    )
}
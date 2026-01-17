import '../styles/Desktop.scss'
import { Home } from "./Home"
import { Taskbar } from "./Taskbar"


export const Desktop = () => {

    return (
        <section id='desktop'>
            <Home />
            <Taskbar />
        </section>
    )
}


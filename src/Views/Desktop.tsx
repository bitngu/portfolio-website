import '../styles/Desktop.scss'
import { Home } from "./Home"
import { Taskbar } from "./Taskbar"
import { Window } from './Window'

export const Desktop = () => {

    return (
        <section id='desktop'>
            <Home />
            <Window />
            <Taskbar />
        </section>
    )
}


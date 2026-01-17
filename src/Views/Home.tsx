import '../styles/Home.scss';
import { ieApp, recycleApp } from '../classes/AppData';
import { DesktopItem } from '../Components/DesktopItem';


export const Home = (): React.ReactNode => {
    return (
        <section id='home'>
            <DesktopItem task={recycleApp} />
            <DesktopItem task={ieApp} />
        </section>
    )
}
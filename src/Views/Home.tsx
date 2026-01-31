import '../styles/Home.scss';
import { homeApp, ieApp, recycleApp, windowsMediaPlayer} from '../classes/AppData';
import { DesktopItem } from '../Components/DesktopItem';


export const Home = (): React.ReactNode => {
    return (
        <section id='home'>
            <DesktopItem task={recycleApp} />
            <DesktopItem task={ieApp} />
            <DesktopItem task={homeApp} />
            <DesktopItem task={windowsMediaPlayer} />
        </section>
    )
}
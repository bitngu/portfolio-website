import { DesktopItem } from '../Components/DesktopItem';
import '../styles/Home.scss';
import ie from '/assets/taskbar/internet_explorer.png'
import recycleBin from '/assets/taskbar/recycle_bin.webp'


export const Home = (): React.ReactNode => {
    return (
        <section id='home' draggable={true}>
            <DesktopItem {...{name: 'Recycle Bin', icon: recycleBin}}/>
            <DesktopItem {...{name: 'Internet Explorer', icon: ie}}/>
        </section>
    )
}
import '../styles/Experiences.scss'
import info from "../info.json"
import { ProfileCard } from '../Components/ProfileCard'
import { Header } from './Header';

export const Experiences = () => {
    console.log('experiences-section');
    return (
        <section id='experiences'>
            <Header name='Experiences'/>
            {info.experiences.past.map(experience => {
                return <ProfileCard {...experience} />
            })}
        </section>
    )
}
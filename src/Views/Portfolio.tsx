import '../styles/Portfolio.scss'
import { Postcard } from "../Components/Postcard"
import info from "../info.json"
import honeycomb from '../assets/logos/honeycomb.svg'
import { Header } from './Header'

export const Portfolio = (): React.ReactNode => {

    return (
    <section id='portfolio'>
        <Header name='Portfolio'/>
        <div className='portfolio-items'>
            {info.portfolio.items.map((item,index) => {
                return <Postcard key={`${item.name}-${index}`} {...item}></Postcard>
            })}
        </div>
    </section>
    )


}
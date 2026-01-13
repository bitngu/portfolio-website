import honeycomb from '../assets/logos/honeycomb.svg'
import '../styles/Header.scss'

export const Header = (props: {name: string}): React.ReactNode => {
    return (
        <header>
            <h1> {props.name} </h1>
            <div className='content'>
                <img src={honeycomb} alt='honeycomb' />
            </div>
        </header>
    )
}
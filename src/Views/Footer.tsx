import '../styles/Footer.scss'
import icon from '../assets/logos/sample-icon.png'
import github from '../assets/logos/github-logo.png'
import email from '../assets/logos/email-logo.png'
import linkedin from '../assets/logos/linkedin-logo.png'

// Todo: add home/ change email logo
// add variables in a seperate fiel for links

export const Footer = (): React.ReactNode => {
    const year = new Date().getFullYear()
    // contact
    return (
    <footer>
        <div className='portfolio-icon'> <img src={icon} alt='portfolio-icon'/> </div>
        <div className='contact-info'>
            <div className='location'>
                <div className='info-logo'> 
                    <img src={linkedin} alt='home-logo'/> 
                </div>
                <p> San Francisco Bay Area </p>
            </div>
            <div className='linkedin'> 
                <div className='info-logo'>
                    <img src={linkedin} alt='linkedin-logo'/>
                </div>
                <a href={'https://www.linkedin.com/in/bitngu/'}>Connect with me</a>
            </div>
            <div className='email'>
                <div className='info-logo'>
                    <img src={email} alt='email-logo'/>
                </div>
                <a href={'mailto:bitngu3@gmail.com'}>Send me an email</a>
            </div>
            <div className='github'> 
                <div className='info-logo'>
                    <img src={github} alt='github-logo'/>
                </div>
                <a href={'https://github.com/bitngu'}>Check out my Github</a>
            </div>
        </div>
        <p className='copyright'>{`© ${year} Bi Nguyen. All rights reserved.`}</p>

    </footer>
    )
}

export default Footer
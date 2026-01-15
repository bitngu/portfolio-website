import '../styles/Intro.scss';
// import logo from '/assets/PawsitiveID/pawsitiveid_0.png';
import logo from '../assets/logos/cube.svg';


export const Intro = () => {
    return (
        <section id='intro'>
            <div className="welcome">
                <div className= "message">
                    <p>Welcome to my website!</p>
                    <p>For a better experience, please use the desktop version</p>
                </div>
                <div className='website-logo'>
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <div className="info">
                <div className='type'>
                    <p> Type </p>
                    <p> :Portfolio Website </p>
                </div>
                <div className='built-with'>
                    <p> Built with </p>
                    <p> :React, Typescript, HTML, CSS</p>
                </div>
            </div>
            <div className="about">
                <div className='specialty'>
                    <p>Specialist</p>
                    <p>:Software engineer</p>
                </div>
                <div className='yoe'>
                    <p>Year of experience</p>
                    <p>:~3</p>
                </div>
                <div className='tech-stack'>
                    <p>Stack</p>
                    <p>:Typescript, Python, C++, HTML, CSS</p>
                </div>
            </div>
            <div className='other'>
                <div className='pets'>
                    <p> Cats </p>
                    <p>:Matthew, Robert</p>
                </div>
            </div>
            <div className="end-note">
                <p> Explore the site to find niche interaction and have fun! </p>
                <p> Press <span>Enter</span> to load the website </p>
            </div>
        </section>
    )

}
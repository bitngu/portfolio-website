import '../styles/Navbar.scss';
import icon from '../assets/logos/sample-icon.png';
import {useWidth} from '../helpers'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (): React.ReactNode => {
    const [toggleMenu, setToggleMenu] = useState(false);
    // const [toggleMenu, setToggleMenu] = useState(false);

    const isWebView = useWidth() > 768;

    const handleOnClick = () => {
        if (!isWebView) {
            setToggleMenu (prev => !prev)
        }
    }

    const navigationMenus = (): React.ReactNode => {
        return (
            <>
                <NavLink to='/' onClick={handleOnClick} > Home </NavLink>
                <NavLink to='/about' onClick={handleOnClick}> About </NavLink>
                <NavLink to='/experiences' onClick={handleOnClick}> Experience </NavLink>
                <NavLink to='/portfolio' onClick={handleOnClick}> Portfolio </NavLink>
            </>
        )
    }
  
    return (
    <nav className={`${toggleMenu ? 'expanded': ''}`}>
        <div className='portfolio-icon'>
            <img src={icon} alt="portfolio-icon "/>
        </div>

        {isWebView ? 
        <div className='nav-menu'>
            {navigationMenus()}
        </div>
        : 
        <>
            <button className='mobile-nav-btn' onClick={handleOnClick}> <div className='bar'/> </button>
            <div className='mobile-nav-menu'> 
                {navigationMenus()}
            </div>
        </>
    }
    </nav>
    )

}

export default Navbar;
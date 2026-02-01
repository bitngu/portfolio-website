import '../styles/AboutMe.scss'
import banner from '/assets/about/banner.avif'
import profile from '/assets/about/profile.jpeg'
import info from "../info.json"
import { AdBanner, type AdBannerProps } from './AdBanner'
import ad1 from '/assets/about/ad-banner1.jpg'
import ad2 from '/assets/about/ad-banner2.jpg'
import ad3 from '/assets/about/ad-banner3.jpg'
import ad4 from '/assets/about/ad-banner4.jpg'

import { useEffect, useState } from 'react'
import { getRandomInt } from '../helpers'
import { Gallery } from './Gallery'



const petAdNetwork: AdBannerProps[] = [
    {
        path: ad1,
        text: 'Adopt a pet in need.',
        link: 'https://www.petsinneed.org'
    },
    {
        path: ad2,
        text: 'Love starts with adoption.',
        link: 'https://www.haywardanimals.org'

    },
    {
        path: ad3,
        text: 'Forever starts today.',
        link: 'https://phs-spca.org'
    },
    {
        path: ad4,
        text: 'Adopt at a local shelter.',
        link: 'https://www.hssv.org'
    },
]

export const AboutMe = (): React.ReactNode => {
    
    const [petAdIndex, setPetAdIndex] = useState(getRandomInt(petAdNetwork.length));

    useEffect(() => {
        const id = setInterval(() => {
            setPetAdIndex(getRandomInt(petAdNetwork.length))
        }, 30000)
        return () => clearInterval(id)
    }, [])

    return <div className="about-me">
        <div className='banner'>
            <img src={banner} />
            <h2>San Francisco Bay Area</h2>
            <p>bitngu3@gmail.com</p>
        </div>
        <div className='intro'>
            <div className='profile'>
                <div className='img-container'>
                    <img src={profile} />
                </div>
                <h1> Bi Nguyen </h1>
                <h2> Software Engineer </h2>
                <div className='socials'>
                    <h2>Socials</h2>
                    <div className='linkedin'>
                        <p>/in</p>
                        <button onClick={() => open(info.about.linkedin)}>@bitngu</button>
                    </div>
                    <div className='github'>
                        <p>/github</p>
                        <button onClick={() => open(info.about.github)}>@bitngu</button>
                    </div>
                </div>
            </div>
            <div className='about'>
                <h2>{info.about.intro}</h2>
                <p>{info.about.me}</p>
                <p>{info.about.journey}</p>
                <p>{info.about.website}</p>
            </div>
            <AdBanner {...petAdNetwork[petAdIndex]}/>
        </div>
        <Gallery />
    </div>
}
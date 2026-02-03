import  '../styles/AdobeAdBanner.scss'
import adobe from '/assets/about/adobe-flash.png';


export const AdobeAdBanner = (): React.ReactNode => {
    return (<div className="adobe-ad-banner">
        <h3>Adobe Flash Player Required.</h3>
        <p>This Media Player requires an installed Flash Player.</p>
        <p>Please click the button below to download the latest version: </p>
        <div className="adobe-content">
            <div className="img-wrapper">
                <img src={adobe} alt='adobe-flash'/>
            </div>
            <div className='ad-text'>
                <p>Get <span>ADOBE</span></p>
                <p><span className='flash'>FLASH</span> PLAYER</p>
            </div>
        </div>
    </div>)
}
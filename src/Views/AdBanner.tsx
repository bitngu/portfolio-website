import '../styles/AdBanner.scss'

export type AdBannerProps = {
    path: string;
    text: string;
    link: string;
}

export const AdBanner = (props: AdBannerProps): React.ReactNode => {
    return <div className="ad-banner" onClick={() => open(props.link)}>
        <div className='img-container'>
            <img src={props.path}></img>
        </div>
        <span>Ad</span>
        <p> {props.text} </p>
    </div>
}
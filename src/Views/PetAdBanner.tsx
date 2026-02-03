import '../styles/PetAdBanner.scss'

export type PetAdBannerProps = {
    path: string;
    text: string;
    link: string;
}

export const PetAdBanner = (props: PetAdBannerProps): React.ReactNode => {
    return <div className="pet-ad-banner" onClick={() => open(props.link)}>
        <div className='img-container'>
            <img src={props.path}></img>
        </div>
        <span>Ad</span>
        <p> {props.text} </p>
    </div>
}
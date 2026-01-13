import '../styles/ProfileCard.scss'

type ProfileCardProps = {
    className?: string;
    title: string;
    companyName: string;
    from: string;
    to: string;
    description: string[];
    type: string;
    logo?: string;
    metadata?: unknown[];
}


export const ProfileCard = (props: ProfileCardProps) => {

    return (
        <div className={`profile-card-container ${props.className ? props.className : ''}`}>
            <div className='company-logo-container'>
                <img src={props.logo} alt={`${props.companyName} logo`} />
            </div>
            <div className='role-details'>
                <h1>{props.title}</h1>
                <h4>{props.companyName} | {props.type} </h4>
                <h4> {props.from} - {props.to} </h4>
                <ul className='role-descriptions'>
                    {props.description.map(item => {
                        return <li>{item}</li>
                    })}
                </ul>
            </div>
        </div>

    )
}
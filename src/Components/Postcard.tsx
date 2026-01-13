import '../styles/Postcard.scss'
import { useNavigate } from 'react-router-dom';


type PostcardProps = {
    className?: string;
    name: string;
    path: string;
    shortDesc: string;
    type: string[];
    links: string[];
    imageAlignment?: string;
}

export const Postcard = (props: PostcardProps): React.ReactNode => {
    const navigate = useNavigate();
    const isSchoolProject = props.type.includes("school");

    const onClick= () => {
        if (isSchoolProject) {
            open(props.links[0]);
        }
        else {
            navigate(`/portfolio/${props.name}`);
        }
    }
    
    const filename = props.path.split('/').pop()?.toLowerCase();

    return (
        <div className="postcard-wrapper">
            <div className="img-container" onClick={onClick}>
                <img style={{objectPosition: props.imageAlignment}} src={`${props.path}/${filename}_0.png`}></img>
                <div className='date'> {props.type}</div>
            </div>
            <div className='details'>
                <h1>{props.name}</h1>
                <p title={`${props.shortDesc}`}>{props.shortDesc}</p>
                <button onClick={onClick}> {isSchoolProject ? "Github" : "More"} </button>
            </div>
        </div>
    )
}
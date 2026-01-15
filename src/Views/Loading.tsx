import '../styles/Loading.scss'

export const Loading = () => {

    return (
        <div className="window-loading">
            <div className="logo">
                <p className="top">Microsoft</p>
                <p className="mid">Windows<span>xp</span></p>
                <p className="bottom">Home Edition</p>
            </div>
            <div className="container">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
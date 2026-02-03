import '../styles/MailAdBanner.scss'
import newMessage from '/assets/about/new-message.png'
import newComment from '/assets/about/new-comment.png'
import newFriendRequest from '/assets/about/new-friend-requests.png'
import newCalendar from '/assets/about/new-calendar.png'
import lovePost from '/assets/about/love-post.png'
import newAlbum from '/assets/about/new-album.png'

export const MailAdBanner = () => {    
    return (
        <div className="mail-ad-banner">
            <div className="title"> My Mail </div>
            <div className="mail-content">
                <div className="content">
                    <div className="img-wrapper">
                        <img src={newMessage} />
                    </div>
                    <h3 className='red'>New Messages! </h3>
                </div>
                <div className="content">
                    <div className="img-wrapper">
                        <img src={newFriendRequest} />
                    </div>
                    <h3 className='blue'>New Friend Requests! </h3>
                </div>
                <div className="content">
                    <div className="img-wrapper">
                        <img src={newComment}></img>
                    </div>
                    <h3 className='red'>New Comment! </h3>
                </div>
                <div className="content">
                    <div className="img-wrapper">
                        <img src={newCalendar}></img>
                    </div>
                    <h3 className='green'>New Event Invitation! </h3>
                </div>
                <div className="content">
                    <div className="img-wrapper">
                        <img src={lovePost}></img>
                    </div>
                    <h3 className='blue'>Someone has a crush on you! </h3>
                </div>
                <div className="content">
                    <div className="img-wrapper">
                        <img src={newAlbum}></img>
                    </div>
                    <h3 className='blue'> A friend shared a new Photo Album </h3>
                </div>
            </div>
            <div className="mailbox"> 
                <div className="inbox"> Inbox </div>
                <div className="inbox"> Friend Requests </div>
                <div className="inbox"> Sent </div>
                <div className="inbox"> Post Bulletin </div>
            </div>
        </div>
    )
}
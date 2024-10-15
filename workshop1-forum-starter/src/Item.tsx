import avatar from "./images/bozai.png";
import Comment from "./comment.types";

type PropsType = {
    comment: Comment,
    loggedInUser: {
        uid: string;
        avatar: string;
        uname: string;
    },
    deleteHandler: (rpid: string) => void;
}

export default function Item({comment, loggedInUser, deleteHandler}: PropsType){
    // const {comment} = props;
    return (
        <div className="reply-item" key={comment.rpid}>
            {/* profile */}
            <div className="root-reply-avatar">
                <div className="bili-avatar">
                    <img
                        className="bili-avatar-img"
                        alt=""
                        src={avatar}
                    />
                </div>
            </div>

            <div className="content-wrap">
                {/* username */}
                <div className="user-info">
                    <div className="user-name">{comment.user.uname}</div>
                </div>
                {/* comment content */}
                <div className="root-reply">
                    <span className="reply-content">{comment.content}</span>
                    <div className="reply-info">
                        {/* comment created time */}
                        <span className="reply-time">{comment.ctime}</span>
                        {/* total likes */}
                        <span className="reply-time">Like:{comment.like}</span>
                        {comment.user.uid === loggedInUser.uid &&
                            <span className="delete-btn"
                                  onClick={() => deleteHandler(comment.rpid)}>Delete</span>}
                    </div>
                </div>
            </div>
        </div>
    )
}
import classnames from 'classnames';
import { nanoid } from 'nanoid';
import _ from 'lodash';
import dayjs from 'dayjs';
import {ChangeEvent, useState} from "react";

import avatar from './images/bozai.png';
import './App.scss';

// Comment List data
const defaultList = [
    {
        // comment id
        rpid: '3',
        // user info
        user: {
            uid: '13258165',
            avatar: '',
            uname: 'Jay Zhou',
        },
        // comment content
        content: 'Nice, well done',
        // created datetime
        ctime: '2022-10-18 08:15',
        like: 88,
    },
    {
        rpid: '2',
        user: {
            uid: '36080105',
            avatar: '',
            uname: 'Song Xu',
        },
        content: 'I search for you thousands of times, from dawn till dusk.',
        ctime: '2023-11-13 11:29',
        like: 68,
    },
    {
        rpid: '1',
        user: {
            uid: '30009257',
            avatar,
            uname: 'John',
        },
        content: 'I told my computer I needed a break... now it will not stop sending me vacation ads.',
        ctime: '2023-10-28 08:29',
        like: 66,
    },
]
// current logged in user info
const loggedInUser = {
    // userid
    uid: '30009257',
    // profile
    avatar,
    // username
    uname: 'John',
}

// Nav Tab
const tabs = [
    {type: 'hot', text: 'Top'},
    {type: 'newest', text: 'Newest'},
]

const App = () => {
    const [comments, setComments] = useState(_.orderBy(defaultList, 'like', 'desc'));
    const [activeTab, setActiveTab] = useState('hot');
    const [content, setContent] = useState('');

    const deleteHandler = (rpid: string) => {
        const newComments =
            comments.filter(comment => comment.rpid !== rpid);
        setComments(newComments);
        // const index = comments.findIndex(comment => comment.rpid === rpid);
        // comments.splice(index, 1);
        // setComments([...comments]);
    }

    const activeTabClickHandler = (type: string) => {
        setActiveTab(type);
        if (type === 'hot') {
            setComments(_.orderBy(comments, 'like', 'desc'));
        } else {
            setComments(_.orderBy(comments, 'ctime', 'desc'));
        }
    }

    const textAreaChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    }

    const makePost = () => {
        const newComment = {
            rpid: nanoid(),
            user: loggedInUser,
            content,
            ctime: dayjs().format('YYYY-MM-DD HH:mm'),
            like: 0,
        };
        if (activeTab === 'hot') {
            setComments(_.orderBy([... comments, newComment], 'like', 'desc'));
        } else {
            setComments(_.orderBy([... comments, newComment], 'ctime', 'desc'));
        }
        setContent('');
    }


    return (
        <div className="app">
            {/* Nav Tab */}
            <div className="reply-navigation">
                <ul className="nav-bar">
                    <li className="nav-title">
                        <span className="nav-title-text">Comments</span>
                        {/* Like */}
                        <span className="total-reply">{comments.length}</span>
                    </li>
                    <li className="nav-sort">
                        {/* highlight class name： active */}
                        {/*{*/}
                        {/*    tabs.map(tab => <span className={activeTab === tab.type ? 'nav-item active': 'nav-item'}>{tab.text}</span>)*/}
                        {/*}*/}
                        {/*{*/}
                        {/*    tabs.map(tab => <span className={`nav-item ${activeTab === tab.type && 'active'}`}>{tab.text}</span>)*/}
                        {/*}*/}

                        {
                            tabs.map(tab =>
                                <span
                                    key={tab.type}
                                    className={classnames('nav-item', {'active': activeTab === tab.type})}
                                    onClick={() => activeTabClickHandler(tab.type)}
                                >
                                        {tab.text}
                                </span>
                            )
                        }
                    </li>
                </ul>
            </div>

            <div className="reply-wrap">
                {/* comments */}
                <div className="box-normal">
                    {/* current logged in user profile */}
                    <div className="reply-box-avatar">
                        <div className="bili-avatar">
                            <img className="bili-avatar-img" src={avatar} alt="Profile"/>
                        </div>
                    </div>
                    <div className="reply-box-wrap">
                        {/* comment */}
                        <textarea
                            className="reply-box-textarea"
                            placeholder="tell something..."
                            value={content}
                            onChange={textAreaChangeHandler}
                        />
                        {/* post button */}
                        <div className="reply-box-send" onClick={makePost}>
                            <div className="send-text">post</div>
                        </div>
                    </div>
                </div>
                {/* comment list */}
                <div className="reply-list">
                    {/* comment item */}
                    {comments.map(comment =>
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
                        </div>)}

                </div>
            </div>
        </div>
    )
}

export default App
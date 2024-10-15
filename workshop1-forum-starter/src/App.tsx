import classnames from 'classnames';
import {nanoid} from 'nanoid';
import _ from 'lodash';
import dayjs from 'dayjs';
import {ChangeEvent, useEffect, useRef, useState} from "react";

import avatar from './images/bozai.png';
import './App.scss';
import Comment from "./comment.types";
import Item from "./Item";

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
    const [comments, setComments] = useState<Comment[]>([]);
    const [activeTab, setActiveTab] = useState('hot');
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        fetch('http://localhost:5555/list')
            .then(response => response.json())
            .then(data => setComments(_.orderBy(data, 'hot', 'desc')))
    }, []);


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

    const makePost = () => {
        const newComment = {
            rpid: nanoid(),
            user: loggedInUser,
            content: textareaRef.current!.value,
            ctime: dayjs().format('YYYY-MM-DD HH:mm'),
            like: 0,
        };
        if (activeTab === 'hot') {
            setComments(_.orderBy([...comments, newComment], 'like', 'desc'));
        } else {
            setComments(_.orderBy([...comments, newComment], 'ctime', 'desc'));
        }
        textareaRef.current!.value = '';
        textareaRef.current!.focus();
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
                            ref={textareaRef}
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
                    {comments.map(c => <Item comment={c}
                                             loggedInUser={loggedInUser}
                                             deleteHandler={deleteHandler}
                                             key={c.rpid}/>)}

                </div>
            </div>
        </div>
    )
}

export default App
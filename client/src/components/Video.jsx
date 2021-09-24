import React, { useState } from 'react';
import Comment from './Comment.jsx'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import 'regenerator-runtime/runtime';

function Video(props) {
    const history = useHistory();
    const [comment, setComment] = useState(false)
    const [comments, setComments] = useState([])
    const [loaded, setLoaded] = useState(false)
    console.log(props.title, comments)
    let tryComments = () => {
        if (loaded === true) {
            if (typeof (comments) !== "string") {
                return (
                    <div id="comment-col">
                        <div id="recent-comments">
                            Recent Comments
                        </div>
                        <div id="comment-col-two">
                            {comments.slice(comments.length - 4).map((comment) => {
                                //good code, or great code?
                                return <Comment comment={comment}></Comment>
                            })}
                        </div>
                    </div>
                )
            } else {
                return (
                    <div id="comment-col">
                        <div id="recent-comments">
                            No comments on this video yet! Be the first!
                        </div>
                    </div>
                )
            }
        }
    }
    let getComments = async () => {
        await axios.get('/comments:' + props.title).then((data) => {
            setComments(data.data);
            setLoaded(true);
        })
    }
    if (loaded === false) {
        getComments()
    }
    if (comment === true) {
        return (
            <div id="flex-full" className="fade-in">
                <div className={"flex-video " + props.class}>
                    <div className="flex-description">
                        <h1 className="video-title">{props.title}</h1>
                        <p id="description-text">{props.description}</p>
                    </div>
                    <iframe width="560" className="video" height="315" src={props.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                    </iframe>
                </div>
                <div id="flex-comment">
                    <textarea placeholder="Enter your friendly comment here!" id="home-comment-field">
                    </textarea>
                    <div id="flex-cancel">
                        <button id="comment-button" onClick={() => {
                            let comment = document.querySelector('#home-comment-field');
                            axios.post('/comment', {
                                channel: props.class,
                                title: props.title,
                                description: props.description,
                                username: props.username,
                                comment: comment.value,
                                url: props.url,
                            }).then((data) => {
                                getComments()
                                setComment(false)
                            })
                        }}>Add Comment</button>
                        <button id="comment-button" onClick={() => {
                            setComment(false)
                        }}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    } else return (
        <div className={"border flex-video " + props.class}>
            <div className="flex-description">
                <h1 className="video-title">{props.title}</h1>
                <p id="description-text">{props.description}</p>
                <button id="comment-button" onClick={() => {
                    if (props.logged === false) {
                        alert("You must be logged in to comment!")
                    } else {
                        setComment(true);
                    }
                }}>Comment</button>
            </div>
            <iframe width="560" className="video" height="315" src={props.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
            {tryComments()}
        </div>
    )
}

export default Video;
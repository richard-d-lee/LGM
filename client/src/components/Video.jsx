import React, { useState } from 'react';
import axios from 'axios';


function Video(props) {
    const [comment, setComment] = useState(false)
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
                                url: props.url
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
        </div>
    )
}

export default Video;
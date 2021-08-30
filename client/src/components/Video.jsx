import React, { useState } from 'react';


function Video(props) {
    return (
        <div className={"flex-video " + props.class}>
            <div className="flex-description">
                <h1 className="video-title">{props.title}</h1>
                <p id="description-text">{props.description}</p>
                <a id="comment-button" href=".banner">Comment</a>
            </div>
            <iframe width="560" className="video" height="315" src={props.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
        </div>
    )
}

export default Video;
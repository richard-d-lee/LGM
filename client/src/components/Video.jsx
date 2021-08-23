import React, { useState } from 'react';


function Video(props) {
    return (
        <div className={"flex-video " + props.class}>
            <div className="flex-description">
                <h1 className="video-title">{props.title}</h1>
                <p id="description-text">{props.description}</p>
                <button id="comment-button">Comment</button>
            </div>
            <iframe width="560" className="video" height="315" src={props.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
        </div>
    )
}

export default Video;
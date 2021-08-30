
import React, { useState } from 'react';
import Video from './Video.jsx';
const myVideos = require('./video-data.js')

const Videos = (props) => {
    const [count, setCount] = useState(1);
    if (count === 1) {
        return (
            <div className="all-videos">
                {myVideos.slice(0, 4).map((video) => {
                    return <Video
                        username={props.username}
                        logged={props.logged}
                        title={video.title}
                        class={video.class}
                        url={video.url}
                        description={video.description}
                    ></Video>
                })}
                <button id="extend-button" onClick={() => setCount(2)}>See More</button>
            </div>
        );
    } else {
        return (
            <div className="all-videos">
                {myVideos.map((video) => {
                    return <Video
                        username={props.username}
                        logged={props.logged}
                        title={video.title}
                        class={video.class}
                        url={video.url}
                        description={video.description}
                    ></Video>
                })}
            </div>
        );
    }
}
export default Videos;

import React, { useState } from 'react';
import Video from './Video.jsx';
const myVideos = require('./video-data.js')


const Videos = (props) => {
    let renderVideo = (video) => {
        return <Video
            username={props.username}
            logged={props.logged}
            title={video.title}
            class={video.class}
            url={video.url}
            description={video.description}
        ></Video>
    }
    let renderButton = () => {
        return <button id="extend-button" onClick={() => setCount(2)}>See More</button>
    }
    const [count, setCount] = useState(1);
    switch (props.page) {
        case 'crispy':
            if (count === 1) {
                return (
                    <div className="all-videos">
                        {myVideos.slice(0, 4).map((video) => {
                            if (video.class === 'crispy') {
                                return renderVideo(video)
                            }
                        })}
                        {renderButton()}
                    </div>
                );
            } else {
                return (
                    <div className="all-videos">
                        {myVideos.map((video) => {
                            if (video.class === 'crispy') {
                                return renderVideo(video)
                            }
                        })}
                        {renderButton()}
                    </div>
                );
            }
        case 'simstat': {
            return (
                <div className="all-videos">
                    {myVideos.map((video) => {
                        if (video.class === 'simstat') {
                            return renderVideo(video)
                        }
                    })}
                </div>
            );
        }
    }
    if (count === 1) {
        return (
            <div className="all-videos">
                {myVideos.slice(0, 4).map((video) => {
                    return renderVideo(video)
                })}
                {renderButton()}
            </div>
        );
    } else {
        return (
            <div className="all-videos">
                {myVideos.map((video) => {
                    return renderVideo(video)
                })}
            </div>
        );
    }
}
export default Videos;
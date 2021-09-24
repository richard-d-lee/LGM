import React, { useState } from 'react';
let topics = ['Video Games', 'Movies', 'Music', 'Rowscas', 'Lee Gaming', 'Shitposting', 'Bug Reports']

function Forum(props) {
    let chooseTopic = (e) => {
        if (props.logged === true) {
            setTopic(e.target.innerHTML);
        } else {
            alert('You must be logged in to post to the forums!')
        }
    }
    let resetTopic = () => {
        setTopic('')
    }
    const [topic, setTopic] = useState('fdsf');
    switch (topic) {
        case 'Movies':
        case 'Video Games':
        case 'Music':
        case 'Music':
        case 'Rowscas':
        case 'Lee Gaming':
        case 'Shitposting':
        case 'Bug Reports':
            return (
                <div id="post-home">
                    <div id="post-topic">
                        <h1>
                            {topic}
                        </h1>
                    </div>
                    <form className="flex-column" id="post-form">
                        <h2>Create Post</h2>
                        <div className="flex-row" id="post-field">
                            <h2>Title</h2>
                            <label>
                                <input placeholder="something simple" type="text" name="name" id="post-title" />
                            </label>
                        </div>
                        <div className="flex-row" id="post-field">
                            <h2>Body</h2>
                            <label>
                                <textarea placeholder="maximum 500 characters" id="post-body" />
                            </label>
                        </div>
                        <button type="submit" id="post-submit">Submit</button>
                    </form>
                    <div className="center" id="civility">Keep it civil!</div>
                </div>
            )
    }
    return (
        <div id="forum-home">
            <h1>
                Choose a topic to explore with other users!
            </h1>
            <div id="all-topics">
                {topics.map((topic) => {
                    return (
                        <div id="forum-topic">
                            <button id="topic-button" onClick={chooseTopic}>
                                {topic}
                            </button>
                            <div id="topic-text">
                                Posts: Comments: Most Recent:
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Forum;
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
                    <div>
                        <h1>
                            {topic}
                        </h1>
                    </div>
                    <form>
                        Create a post: &nbsp;
                        <label>
                            <input type="text" name="name" />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            )
    }
    return (
        <div id="forum-home">
            <h1>
                Choose a topic to explore with other users!
            </h1>
            <div>
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
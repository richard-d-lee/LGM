import React, { useState } from 'react';
let topics = ['Video Games', 'Movies', 'Music', 'Art and Other Beauties', 'Lee Gaming', 'Shitposting', 'Bug Reports']

function Forum(props) {
    return (
        <div id="forum-home">
            <h1>
                Choose a topic to explore with other users!
            </h1>
            <div>
                {topics.map((topic) => {
                    return (
                        <div id="forum-topic">
                            <button id="topic-button">
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
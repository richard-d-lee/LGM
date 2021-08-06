import React, { useState } from 'react';

function Content(props) {
    if (props.page === "register") {
        return (
            <center>
                <div id="login-page">
                    <center id="center-flex">
                        <p id="username-text">username</p>
                        <textarea placeholder="something clever" className="text-field"></textarea>
                    </center>
                    <center id="center-flex">
                        <p id="username-text">password</p>
                        <textarea placeholder="more clever" className="text-field"></textarea>
                    </center>
                    <center id="center-flex">
                        <p id="username-text">re-enter</p>
                        <textarea placeholder="more clever" className="text-field"></textarea>
                    </center>
                    <button>Submit</button>
                </div>
            </center>
        )
    } else return (
        <center>
            <div id="login-page">
                <center id="center-flex">
                    <p id="username-text">username</p>
                    <textarea placeholder="something clever" className="text-field"></textarea>
                </center>
                <center id="center-flex">
                    <p id="username-text">password</p>
                    <textarea placeholder="more clever" className="text-field"></textarea>
                </center>
                <button>Submit</button>
            </div>
        </center>
    )
}

export default Content;
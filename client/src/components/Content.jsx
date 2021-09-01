import React, { useState } from 'react';
import Login from './Login.jsx';
import Videos from './Videos.jsx';


function Content(props) {
    if (props.page === "about") {
        return (
            <div className="all-videos terms">
                <p>
                    We are a band of goofy nerds who like to create things and put them out to the world. This website will regularly be updated with new features and content. Thank you for checking us out!
                </p>
            </div>
        )
    }
    if (props.page === "login" || props.page === "register") {
        return (
            <Login
                logged={props.logged}
                change={props.change}
                setLogged={props.setLogged}
                page={props.page}
            />)
    } else if (props.page === "terms") {
        return (
            <div className="all-videos terms">
                <p>
                    By agreeing to our terms of service, you agree to not be rude in the forums and agree that at any time, for any reason, the moderators of Lee Gaming can revoke any and all priveleges associated with the use of this website.
                </p>
            </div>
        )
    } else return <div>
        {<Videos
            username={props.username}
            logged={props.logged} />}
    </div>
}

export default Content;
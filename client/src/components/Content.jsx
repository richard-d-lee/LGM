import React, { useState } from 'react';
import Login from './Login.jsx';
import Videos from './Videos.jsx';
import Forum from './Forum.jsx';
import rowscas from './rowscas.jpg';

function Content(props) {
    switch (props.page) {
        case 'crispy':
        case 'simstat':
            return (
                <div>
                    {<Videos
                        username={props.username}
                        logged={props.logged}
                        page={props.page}
                    />}
                </div>
            )
        case 'login':
        case 'register':
            return (
                <Login
                    logged={props.logged}
                    change={props.change}
                    setLogged={props.setLogged}
                    page={props.page}
                />)
        case 'forum':
            return (
                <Forum />
            );
        case 'about':
            return (
                <div className="all-videos terms">
                    <p>
                        We are a band of goofy nerds who like to create things and put them out to the world. This website will regularly be updated with new features and content. Thank you for checking us out!
                    </p>
                    <a href="mailto:simstatpodcast@gmail.com" subject="LGM Site Contact">Click here to send us an email!</a>
                </div>
            );
        case 'terms':
            return (
                <div className="all-videos terms">
                    <p>
                        By agreeing to our terms of service, you agree to not be rude in the forums and agree that at any time, for any reason, the moderators of Lee Gaming can revoke any and all priveleges associated with the use of this website.
                    </p>
                </div>
            )
        case 'rowscas':
            return (
                <div className="all-videos CJ">
                    <div className="flex-column">
                        <h1 id="CJ-date">May 1990 - September 2021</h1>
                        <img id="CJ" src={rowscas} />
                    </div>
                    <p>
                        Charles (CJ) Pape was a beloved friend and a constant companion when times were hard. He was bit hard by the depression bug and could always empathize with his friends from his own trauma. There was nothing he loved more in life than playing video games with his friends, and will deeply missed by the creators of this web site.
                        <br></br>
                        <br></br>
                        Rest in peace Rowscas. You live on in me and the many others who you had an impact on. Love you, brother.
                    </p>
                </div>
            )

    }
    return <div>
        {<Videos
            username={props.username}
            logged={props.logged} />}
    </div>
}

export default Content;
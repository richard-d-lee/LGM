import React, { useState } from 'react';
import Login from './Login.jsx';
import Videos from './Videos.jsx';


function Content(props) {
    console.log(props.page)
    if (props.page === "login" || props.page === "register") {
        return (<Login logged={props.logged} change={props.change} setLogged={props.setLogged} page={props.page} />)
    } else if (props.extend === true) {
        return (
            <div>
                {<Videos count={1}></Videos>}
            </div>
        )
    } else if (props.page === "terms") {
        return (
            <div className="all-videos terms">
                <p>
                    By agreeing to our terms of service, you agree to not be rude in the forums and agree that at any time, for any reason, the moderators of Lee Gaming can revoke any and all priveleges associated with the use of this website. You also agree that Richard "Buz" Lee is the god-king of all reality.
                </p>
            </div>
        )
    } else return <div>
        {<Videos count={2}></Videos>}
    </div>
}

export default Content;
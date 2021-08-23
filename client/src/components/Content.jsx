import React, { useState } from 'react';
import Login from './Login.jsx';
import Videos from './Videos.jsx';


function Content(props) {
    if (props.page === "login" || props.page === "register") {
        return (<Login page={props.page} />)
    } else if (props.extend === true) {
        return (
            <div>
                {<Videos count={1}></Videos>}
            </div>
        )
    } else return <div>
        {<Videos count={2}></Videos>}
    </div>
}

export default Content;
import React, { useState } from 'react';
import Login from './Login.jsx';
import createVideos from '../helpers/iframes.jsx';


function Content(props) {
    if (props.page === "login" || props.page === "register") {
        return (<Login page={props.page} />)
    } else {
        return (
            <div>
                {createVideos()}
                <div>
                    {
                        //row for above, column for below
                    }
                    <div>
                        {
                            //current content
                        }
                    </div>
                    <div>
                        {
                            //old content
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Content;
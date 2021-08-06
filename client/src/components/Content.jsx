import React, { useState } from 'react';
import Login from './Login.jsx';

function Content(props) {
    if (props.page === "login" || props.page === "register") {
        return (<Login page={props.page} />)
    } else {
        return (
            <div>
                <div>
                    {
                        //streaming info/links
                    }
                </div>
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
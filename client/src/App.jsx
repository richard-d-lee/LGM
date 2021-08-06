import React from 'react';
import axios from 'axios';

const App = () => {
    return ( 
        <div>
            <button onClick={
                () => {
                    axios.get("/helloworld").then(
                        (data) => {console.log(data.data.body)}
                    )
                }
                }>Hello World</button>
                <div>LGM</div>
        </div>
    );
}

export default App;
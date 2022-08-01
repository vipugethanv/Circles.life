import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'index.css';


const HelloWorld = () => {
    return(
        <React.Fragment>
        <input
        name='email'
        type='email'
        placeholder='example@mail.com'/>
        <button>Click</button>
        </React.Fragment>
    )
    ;
    
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
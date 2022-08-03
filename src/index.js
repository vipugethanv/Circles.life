import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'index.css';
//import { ThemeProvider } from 'emotion-theming';
//import theme form '@rebass/preset';
import { ThemeProvider } from 'theme-ui';


//export default props =>
//<ThemeProvider theme={theme}>
//{props.children}
//</ThemeProvider>


const HelloWorld = () => {
    //<link rel="stylesheet" href="index.css"></link>
    return(
        
    <div class="centre">
    <h1>Login to pick a Challenge</h1>
    <form method='post'>

        <div class = "loginpage">
            <label>Username </label>
            <input type="text" required/>
        </div>

        <div class = "loginpage">
            <label>Password </label>
            <input type="password" required/>
        </div>

        
            <input type="submit" value="Login"/><br></br><br></br>
       
    </form> 
    </div>
    
    )
    ;
    
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
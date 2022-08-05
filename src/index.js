import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import 'index.css';
//import { ThemeProvider } from 'emotion-theming';
//import theme form '@rebass/preset';
//import { ThemeProvider } from 'theme-ui';


//export default props =>
//<ThemeProvider theme={theme}>
//{props.children}
//</ThemeProvider>
const Home =()=>
{
    return<div>Home</div>
}

const About =() =>
{
    return<div>About</div>
}

const Signup = () => {
    return(
     <BrowserRouter>  
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
    </BrowserRouter>
    )
    ;
    
}

ReactDOM.render(<Signup/>, document.getElementById("root"));
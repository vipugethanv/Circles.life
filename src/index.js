import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router , Routes , Route , Switch} from 'react-router-dom';
import { Button } from 'rebass';
import 'index.css';
import ContactPage from "./contactPage";
import AboutPage from "./aboutPage";

//import { ThemeProvider } from 'emotion-theming';
//import theme form '@rebass/preset';
//import { ThemeProvider } from 'theme-ui';


//export default props =>
//<ThemeProvider theme={theme}>
//{props.children}
//</ThemeProvider>

const Signup = () => {
    

    return(  
        
    <div className="centre">
    <h1>Login to pick a Challenge</h1>
    <form method='post'>

        <div className = "loginpage">
            <label>Username </label>
            <input type="text" required/>
        </div>

        <div className = "loginpage">
            <label>Password </label>
            <input type="password" required/>
        </div>

        <label>vipu</label>
            <input type="submit" value="Login"/><br></br><br></br>
            
       <Router>
        <Routes>
            <Route path='/' element= {<AboutPage/>}>
                
            </Route>
        </Routes>
       </Router>
      
    </form> 
    </div>
   
    )
    ;
    
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Signup/>);

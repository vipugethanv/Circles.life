import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router , Routes , Route , Link} from 'react-router-dom';
import { Button } from 'rebass';
import 'index.css';
import Contact from "./Contact";
import About from "./About";

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

        
            <input type="submit" value="Login"/><br></br><br></br>
            
       <Router>
       <div className="App">
    <ul>
	    <li>
		      <Link to="/About">About Us</Link>
	    </li>

	    <li>
		      <Link to="/Contact">Contact Us</Link>
	    </li>
	  </ul>
  </div>
        <Routes>
            <Route exact path='/About' element={< About />}></Route>
            <Route exact path='/Contact' element={< Contact />}></Route>
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

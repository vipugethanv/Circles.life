import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router , Routes , Route , Link} from 'react-router-dom';
import { Button } from 'rebass';
import 'index.css';
import contact from "./contact";
import about from "./about";

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
		      <Link to="/about">About Us</Link>
	    </li>

	    <li>
		      <Link to="/contact">Contact Us</Link>
	    </li>
	  </ul>
  </div>
        <Routes>
            <Route exact path='/about' element={< about />}></Route>
            <Route exact path='/contact' element={< contact />}></Route>
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

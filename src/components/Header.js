import { useState } from "react";
import { IMG_CDN_URL } from "../constants";
import { Link } from "react-router-dom";


const Title = () => {
  return (
    <a href="/">
      <img
        alt="logo"
        className="logo"
        src= {IMG_CDN_URL}
      />
    </a>
  );
};
const Header = () => {
  const [isloggedIn,setIsLoggedIn]=useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to='/'><li>Home</li></Link>
          <Link to='/about'><li>About</li></Link>
          <Link to='/contact'><li>Contact us</li></Link>
          <Link to='/instamart'><li>Instamart</li></Link>
          <li>Cart</li>

        </ul>
      </div>
      {!isloggedIn ? (<button 
      onClick = {() => setIsLoggedIn(true)}
       >Login</button>) 
      :  (<button 
        onClick = {() => setIsLoggedIn(false)}
         >Logout</button>)   }
      
     
      </div>
  );
};

export default Header;

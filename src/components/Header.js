import { useState } from "react";
import { IMG_CDN_URL } from "../constants";
import { Link } from "react-router-dom";


const Title = () => {
  return (
    <a href="/">
      <img
        alt="logo"
        className= "p-2 h-28"
        src= {IMG_CDN_URL}
      />
    </a>
  );
};
const Header = () => {
  const [isloggedIn,setIsLoggedIn]=useState(false);
  return (
    <div className="flex justify-between bg-blue-300 shadow-lg">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10  ">
          <Link to='/'><li className="px-2">Home</li></Link>
          <Link to='/about'><li className="px-2">About</li></Link>
          <Link to='/contact'><li className="px-2">Contact us</li></Link>
          <Link to='/instamart'><li className="px-2">Instamart</li></Link>
          <li className="px-2">Cart</li>

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

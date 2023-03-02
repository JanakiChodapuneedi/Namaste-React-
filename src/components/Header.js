import { useState,useContext } from "react";
import { IMG_CDN_URL } from "../constants";
import { Link } from "react-router-dom";
import useOffline from "../Utils/useOffline";
import UserContext from "../Utils/userContext";
import { useSelector } from "react-redux";


const Title = () => {
  return (
    <a href="/">
      <img
        alt="logo"
        className= "p-2 h-20"
        src= {IMG_CDN_URL}
      />
    </a>
  );
};
const Header = () => {
  const {user} = useContext(UserContext);
  const offline = useOffline();
  const [isloggedIn,setIsLoggedIn]=useState(false);

  const cartItems = useSelector(store => store.cart.items);

  return (
    <div className="flex justify-between bg-white shadow-lg">
      <Title />
      <div className="nav-items">
        <ul className="flex py-5  ">
          <Link to='/'><li className="px-2">Home</li></Link>
          <Link to='/about'><li className="px-2">About</li></Link>
          <Link to='/contact'><li className="px-2">Contact us</li></Link>
          <Link to='/instamart'><li className="px-2">Instamart</li></Link>
          <Link to='/cart'><li className="px-2">Cart - {cartItems.length} items</li></Link>

        </ul>
      </div>
      <h1 className="m-5">{user.name}</h1>
      <h1 className="m-5">{!offline ? "✅" : "🔴"}</h1>
      {!isloggedIn ? (<button  className="px-5"
      onClick = {() => setIsLoggedIn(true)}
       >Login</button>) 
      :  (<button 
        onClick = {() => setIsLoggedIn(false)}
         >Logout</button>)   }
      
     
      </div>
  );
};

export default Header;

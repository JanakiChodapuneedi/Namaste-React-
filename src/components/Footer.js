import { useContext } from "react";
import UserContext from "../Utils/userContext";
const Footer = () => {
  const {user} = useContext(UserContext) ;
    return (<div> 
      <h1>this site is developed by</h1>
       <h5>{user.name}</h5>
        <h6>{user.email}</h6>
       </div>)
  };

 export default Footer; 
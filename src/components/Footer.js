import { useContext } from "react";
import UserContext from "../Utils/userContext";
const Footer = () => {
  const {user} = useContext(UserContext) ;
    return (<div className="bg-black  w-full h-16 p-5    bottom-0"> 
      <h1 className="text-white font-bold justify-items-center">This site is developed by {user.name}</h1>
       </div>)
  };

 export default Footer; 
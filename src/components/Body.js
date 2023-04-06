import { useState, useEffect, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { searchFilter } from "../Utils/helper";
import { ALL_RESTAURANT_DATA_CDN_URL } from "../constants";
import useOffline from "../Utils/useOffline";
import UserContext from "../Utils/userContext";

const Body = () => {
   const {user,setUser} = useContext(UserContext);
  useEffect(()=>{
    getRestaurants();
  },[]);
  async function getRestaurants(){
    const data = await fetch(ALL_RESTAURANT_DATA_CDN_URL);
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  
    const [searchTxt,setSearchText]=useState("");
    const [allRestaurants,setAllRestaurants]=useState([]);
    const [filteredRestaurants,setFilteredRestaurants] =useState(null);

    const offline = useOffline();

    if(offline){
      return <div>
        <h1>You are Offline</h1>
        <h2>Please check your internet connection</h2>
        </div>
    }
    
    return allRestaurants?.length===0 ? <Shimmer/> : (
    <>
    <div className="search-container p-5 m-2 bg-blue-200 ">
    <input type="text"
        className="hover:bg-green-100"
        placeholder="Search"
        value= {searchTxt}
        onChange = {(e) => setSearchText(e.target.value)}
    />
    <button className="p-2 m-2 bg-purple-400 hover:bg-pink-300 text-white rounded-lg"
    onClick={()=>{
      const data = searchFilter(searchTxt,allRestaurants);
    setFilteredRestaurants(data)}}
    >Search</button>
    <input value={user.name}
    onChange={(e)=>setUser({
      name : e.target.value,
      email : "updatedmail.com"
    })}/>
    </div>
    <div className="font-bold text-lg bg-red-400 text-center">Kindly Please Allow CORS: Access-Control-Allow-Origin chrome extension for viewing this app.</div>
   { (!filteredRestaurants)? <h1> No restaurants matched with your search</h1>: 

    <div className="flex flex-wrap">
      {filteredRestaurants?.map((restaurant) => {
        return(
          <Link to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id}>
        <RestaurantCard {...restaurant.data}  />
        </Link>
        );
      })}
    </div> }
    </>
    
  );
};

export default Body;

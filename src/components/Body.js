import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { searchFilter } from "../Utils/helper";
import { ALL_RESTAURANT_DATA_CDN_URL } from "../constants";
import useOffline from "../Utils/useOffline";
const Body = () => {

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
    <div className="search-container">
    <input type="text"
        className="search-input"
        placeholder="Search"
        value= {searchTxt}
        onChange = {(e) => setSearchText(e.target.value)}
    />
    <button className="search-btn"
    onClick={()=>{
      const data = searchFilter(searchTxt,filteredRestaurants);
    setFilteredRestaurants(data)}}
    >Search</button>
    </div>
   { (!filteredRestaurants)? <h1> No restaurants matched with your search</h1>: 

    <div className="restaurant-list">
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

import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {

  useEffect(()=>{
    getRestaurants();
  },[]);
  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8996676&lng=77.4826837&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  
    const [searchTxt,setSearchText]=useState("");
    const [allRestaurants,setAllRestaurants]=useState([]);
    const [filteredRestaurants,setFilteredRestaurants] =useState([]);
    const searchFilter = (searchTxt,restaurants) =>{
      const filteredData = allRestaurants.filter((restaurant)=>restaurant.data.name.toLowerCase().includes(searchTxt.toLowerCase()));
       return filteredData;
    };
   
    
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
   { (filteredRestaurants?.length===0)? <h1> No restaurants matched with your search</h1>: 

    <div className="restaurant-list">
      {filteredRestaurants.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
      })}
    </div> }
    </>
    
  );
};

export default Body;

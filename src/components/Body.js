import { useState } from "react";
import { restaurantlist } from "../constants";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const [searchTxt,setSearchText]=useState("");
    const [restaurants,setRestaurants]=useState(restaurantlist);
    const searchFilter = (searchTxt,restaurants) =>{
      const filteredData=restaurants.filter((restaurant)=>restaurant.data.name.includes(searchTxt)
       )
       return filteredData;
    };
    return (
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
      const data = searchFilter(searchTxt,restaurants);
    setRestaurants(data)}}
    >Search</button>
    </div>
    <div className="restaurant-list">
      {restaurants.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
      })}
    </div>
    </>
    
  );
};

export default Body;

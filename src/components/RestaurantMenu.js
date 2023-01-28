import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SWIGGY_IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../Utils/useRestaurant";


const RestaurantMenu = () => {
    //HOW TO READ A DYNAMIC UI PARAMS
   const params = useParams();
   const {resId}=params;
    
    const restaurant = useRestaurant(resId);


    return (!restaurant?<Shimmer/>:
    <div className="menu">
    <div>
        <h1> {"Restaurant Id: "+restaurant?.id}  </h1>
        <h2>{restaurant.name} </h2>
        <img src={SWIGGY_IMG_CDN_URL +restaurant.cloudinaryImageId}/>
        <h3>{"Cost for Two "+ restaurant.costForTwoMsg }</h3>
        <h3>{restaurant.area}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{"Rating is "+restaurant.avgRatingString}</h3>
    </div>
    <div>
    <h1>Menu</h1>
    <ul>
        {
            Object.values(restaurant?.menu?.items)?.map((item)=> ( <li key={item.id}> { item.name }</li>))
        }
    </ul>
    </div>
    </div>
    )
};

export default RestaurantMenu;
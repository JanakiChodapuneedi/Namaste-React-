
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SWIGGY_IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../Utils/useRestaurant";
import { addItem } from "../Utils/cartSlice";


const RestaurantMenu = () => {
    //HOW TO READ A DYNAMIC UI PARAMS
   const params = useParams();
   const {resId}=params;
   const dispatch = useDispatch();
    
    const restaurant = useRestaurant(resId);

    const handleAddItem  = (item) => {
       dispatch(addItem(item));
    };

    return (!restaurant?<Shimmer/>:
    <div className="">
    <div className="bg-gray-100 justify-items-center">
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
            Object.values(restaurant?.menu?.items)?.map((item)=> ( 
                <div className="flex bg-pink-200 m-4 w-3/4">
               <div className="w-3/4">   
            <div key={item.id}> { item.name }</div>            
            <div> Price:{item.price/10} Rupees </div>
            <div>{item.description}</div>
            </div>  
<div>
            <button className="bg-green-50 p-1 m-2 w-16"
             onClick={()=> handleAddItem(item) }>Add</button>
            <img className="w-28" src={SWIGGY_IMG_CDN_URL+item.cloudinaryImageId}/>
            </div>
            </div>))
        }
    </ul>
    </div>
    </div>
    )
};

export default RestaurantMenu;
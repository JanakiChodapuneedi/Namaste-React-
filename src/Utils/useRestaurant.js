import { RESTAURANT_MENU_CDN_URL } from "../constants";
import { useState,useEffect } from "react";
const useRestaurant = (resId) =>{
    
    const [restaurant,setRestaurant]=useState(null);

    useEffect(()=>{
        getRestaurantInfo();
    },[])

    async function getRestaurantInfo(){
        const data =await fetch(RESTAURANT_MENU_CDN_URL+resId);
        const json= await data.json();
        setRestaurant(json?.data?.cards);
       console.log(json.data.cards)
    }

    return restaurant;

}
export default useRestaurant;
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
  const { resId } = params;
  const dispatch = useDispatch();

  const restaurant = useRestaurant(resId);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="bg-gray-100 justify-items-center">
        <h1> {"Restaurant Id: " + restaurant[0]?.card?.card?.info?.id} </h1>
        <h2>{restaurant[0]?.card?.card?.info?.name} </h2>
        <img
          src={
            SWIGGY_IMG_CDN_URL +
            restaurant[0]?.card?.card?.info?.cloudinaryImageId
          }
        />
        <h3>
          {"Cost for Two " + restaurant[0]?.card?.card?.info?.costForTwoMessage}
        </h3>
        <h3>{restaurant[0]?.card?.card?.info?.locality}</h3>
        <h3>{restaurant[0]?.card?.card?.info?.areaName}</h3>
        <h3>{"Rating is " + restaurant[0]?.card?.card?.info?.avgRating}</h3>
      </div>
      <div>
        
        {console.log(
          restaurant[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card
            ?.itemCards[0].card.info
        )}
        <ul>
          {Object.values(
            restaurant[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card
              ?.card?.itemCards
          )?.map((item) => (
            <div className="flex bg-gray-300 shadow-lg m-4 w-3/4" key={item?.card?.info?.id}> 
              <div className="w-3/4">
                <div > {item?.card?.info?.name} </div>
                <div> {item?.card?.info?.price / 100} Rupees </div>
                <div>{item?.card?.info?.description}</div>
              </div>
              <div>
                <button
                  className="bg-green-50 p-1 m-2 w-16"
                  onClick={() => handleAddItem(item.card.info)}
                >
                  Add
                </button>
                <img
                  className="w-28"
                  src={SWIGGY_IMG_CDN_URL + item?.card?.info?.imageId}
                />
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;

import { SWIGGY_IMG_CDN_URL } from "../constants";
const RestaurantCard = ({name,cuisines,deliveryTime,cloudinaryImageId}) => {
    return (
      <div className="w-[200px] p-2 m-2 shadow-lg bg-purple-100">
        <img src={SWIGGY_IMG_CDN_URL +cloudinaryImageId} />
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{cuisines.join(", ") }</h3>
        <h4>Delievery Time is {deliveryTime}</h4>
      </div>
    );
  };

  export default RestaurantCard; 
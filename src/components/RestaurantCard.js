import { SWIGGY_IMG_CDN_URL } from "../constants";
const RestaurantCard = ({name,cuisines,deliveryTime,cloudinaryImageId}) => {
    return (
      <div className="card">
        <img src={SWIGGY_IMG_CDN_URL +cloudinaryImageId} />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ") }</h3>
        <h4>Delievery Time is {deliveryTime}</h4>
      </div>
    );
  };

  export default RestaurantCard; 
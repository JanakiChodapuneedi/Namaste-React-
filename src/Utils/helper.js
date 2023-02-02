export const searchFilter = (searchTxt,allRestaurants) =>{
    const filteredData = allRestaurants.filter((restaurant)=>restaurant.data.name.toLowerCase().includes(searchTxt.toLowerCase()));
     return filteredData;
  };
 
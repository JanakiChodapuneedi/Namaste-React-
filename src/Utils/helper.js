export const searchFilter = (searchTxt,restaurants) =>{
    const filteredData = allRestaurants.filter((restaurant)=>restaurant.data.name.toLowerCase().includes(searchTxt.toLowerCase()));
     return filteredData;
  };
 
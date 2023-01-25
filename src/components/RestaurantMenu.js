import { useParams } from "react-router-dom";



const RestaurantMenu = () => {
    //HOW TO READ A DYNAMIC UI PARAMS
    const params = useParams();
    console.log(params);
    const {resId} = params;
    return (<div>
        <h1> restaurant Id: {resId}  </h1>
        <h2>restaurant name </h2>
    </div>)
};

export default RestaurantMenu;
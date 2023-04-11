import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Profile = () => {
    console.log("profiele")
    const [profileInfo,setProfileInfo]=useState(null);
    useEffect(()=>{
            getProfileInfo();
        },[]
    )
    async function getProfileInfo(){
        data = await fetch("https://api.github.com/users/JanakiChodapuneedi");
        console.log("data :"+data);
        json = await data.json();
        setProfileInfo(json);
        console.log(json)
    }

    return profileInfo?(
        <div>           
            <h2>GitHub Id : {profileInfo.id} </h2>
            <h3>GitHub Name : {profileInfo.login}</h3>
        </div>
    ):<div> 
        <h2>GitHub Id : 122475333</h2>
        <h3>GitHub Name : Janaki Chodapuneedi</h3>

    </div>

}

export default Profile;

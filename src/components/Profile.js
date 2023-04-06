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
        json = await data.json();
        setProfileInfo(json);
        console.log(json)
    }

    return profileInfo?(
        <div>           
            <h2>GitHub Id : {profileInfo.id} </h2>
            <h3>GitHub Name : {profileInfo.login}</h3>
        </div>
    ):<Shimmer/>
}

export default Profile;

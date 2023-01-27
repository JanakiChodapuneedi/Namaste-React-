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
            <h1>  Profile </h1>            
            <h2>Id : {profileInfo.id} </h2>
            <h3>Name : {profileInfo.login}</h3>
        </div>
    ):<Shimmer/>
}

export default Profile;

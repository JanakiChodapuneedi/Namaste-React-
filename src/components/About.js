import Profile from "./Profile";
import { Outlet } from "react-router-dom";

const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <p> This the app that gives a chance to you to eat a variety of foods from the restaurants nearby</p>
            <Profile/>
        </div>
    )
}
export default About;

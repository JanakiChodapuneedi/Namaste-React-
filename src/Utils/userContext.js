import { createContext } from "react";

const UserContext = createContext(
    {
        user : {
            name:"dummy",
            email:"dummyemail"
        }
    }
);
UserContext.displayName="UserContext"
export default UserContext;

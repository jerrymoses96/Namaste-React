import { createContext } from "react";

const UserContext = createContext({
    LoggedUser : "Default User",

});


export default UserContext;
import { useState } from "react";
import { Navigate } from "react-router-dom";

export const PINNTAG_USER = "pinntag-user"

const RoleProtectedRoute = ({element}) => {
    // let a =1
    // if(a===1){

    //     return element;
    // }else{
    //     return <></>
    // }
    const [user] = useState(localStorage.getItem(PINNTAG_USER))

    if(user){

        return element;
    } else{
        return <Navigate to={"/login"} />
    }


}

export default RoleProtectedRoute
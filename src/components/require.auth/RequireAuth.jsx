import{ memo } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";


// eslint-disable-next-line react-refresh/only-export-components
const RequireAuth = ({children})=>{
    const {user} = useSelector((state)=> state.authSlice)
    const location = useLocation()

    if(!user){
        return <Navigate to="/login" state={{path: location.pathname}} replace={true}/>
    }
    return children
    
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(RequireAuth)
import { useSelector } from "react-redux"
import { selectIsLoggeIn } from "../redux/auth/selectors"
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({children}) =>{
    const isLoggeIn = useSelector(selectIsLoggeIn);
    const location = useLocation()
    if(isLoggeIn){
        return children;
    }
    return <Navigate to="/login" state={location}/>
}


export default PrivateRoute
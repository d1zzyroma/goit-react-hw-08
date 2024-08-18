import { useSelector } from "react-redux"
import { selectIsLoggeIn } from "../redux/auth/selectors"
import { Navigate, useLocation} from "react-router-dom";

export const PublicRoute = ({children}) => {
    const isLoggeIn = useSelector(selectIsLoggeIn);
    const location = useLocation()
    if(isLoggeIn){
        return <Navigate to={location.state ?? "/"} />
    }
    return children;
};



export default PublicRoute;
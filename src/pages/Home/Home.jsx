import {  useSelector } from "react-redux";
import HomeTitle from "../../components/HomeTitle/HomeTitle";
import { selectIsLoggeIn } from "../../redux/auth/selectors";

const Home = () => {
    
    const isLoggeIn = useSelector(selectIsLoggeIn)
    return(
        <div>
            {isLoggeIn && (
                <h2>Hello, you are in system</h2>
            )}
            {!isLoggeIn && (
                <HomeTitle/>
            )}
            
        </div>
    )
}

export default Home;
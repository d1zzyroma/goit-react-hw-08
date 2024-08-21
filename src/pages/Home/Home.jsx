import {  useSelector } from "react-redux";
import HomeTitle from "../../components/HomeTitle/HomeTitle";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Home = () => {
    
    const isLoggedIn = useSelector(selectIsLoggedIn)
    return(
        <div>
            {isLoggedIn && (
                <h2>Hello, you are in system</h2>
            )}
            {!isLoggedIn && (
                <HomeTitle/>
            )}
            
        </div>
    )
}

export default Home;
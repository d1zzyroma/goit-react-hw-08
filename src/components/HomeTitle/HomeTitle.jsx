import { Link } from "react-router-dom";
import css from "./HomeTitle.module.css";


const HomeTitle = () => {
    return(
        <div className={css.wrapper}>
            <h1>Welcome, mate!</h1>
            <p>Hove are u?</p>
            <p>U can try use our program, if u have account here! If no, u can <Link to='/register'>Sign up</Link>
            </p>
        </div>
    )
}

export default HomeTitle;
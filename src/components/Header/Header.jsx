
import { NavLink } from "react-router-dom";
import css from "./Header.module.css"
import clsx from 'clsx';
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggeIn, selectsUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/authOps";

const Header = () => {
    const user = useSelector(selectsUser);
    const isLoggeIn = useSelector(selectIsLoggeIn);

    const dispatch = useDispatch();

    const buildLinkClass = ({ isActive }) => {
        return clsx(css.link, isActive && css.active);
    };

    return(
        <header className={css.header}>
            {!isLoggeIn && (
                <h2>Module 8</h2>
            )}
            {isLoggeIn && (
                <h2>Module 8, Welcome - {user.name}</h2>
            )}
            
            <nav>
                <ul className={css.list}>
                    <li className={css.listItem}>
                        <NavLink to="/" className={buildLinkClass}>Home</NavLink>
                        
                    </li>

                    {isLoggeIn && (
                        <li className={css.listItem}>
                            <NavLink to="/contacts" className={buildLinkClass}>Contacts</NavLink>
                        </li>
                    )}

                    {!isLoggeIn && 
                    (<>
                        <li className={css.listItem}>
                            <NavLink to="/login" className={buildLinkClass}>Log In</NavLink>
                        </li>
                        <li className={css.listItem}>
                            <NavLink to="/register" className={buildLinkClass}>Register</NavLink>
                        
                        </li>
                    </>)}
                    {isLoggeIn && (
                        <li>
                            <button onClick={() => dispatch(logoutThunk())} className={css.btn}>Exit</button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default Header;
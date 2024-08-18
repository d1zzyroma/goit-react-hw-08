
import { NavLink } from "react-router-dom";
import css from "./Header.module.css"
import clsx from 'clsx';
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggeIn, selectsUser } from "../../redux/auth/selectors";
import { Button, Link as MUILink } from '@mui/material';
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
                    <MUILink component={NavLink} to="/" className={buildLinkClass} >
                        Home
                    </MUILink>
                        
                    </li>
                    <li className={css.listItem}>
                    <MUILink component={NavLink} to="/contacts" className={buildLinkClass} >
                        Contacts
                    </MUILink>
                    </li>
                    

                    {!isLoggeIn && 
                    (<>
                        <li className={css.listItem}>
                        <MUILink component={NavLink} to="/login" className={buildLinkClass} >
                            Log In
                        </MUILink>
                            
                        </li>
                        <li className={css.listItem}>
                            
                            <MUILink component={NavLink} to="/register" className={buildLinkClass} >
                                Register
                            </MUILink>
                        </li>
                    </>)}
                    {isLoggeIn && (
                        <li>
                            <Button variant="contained" color="primary" onClick={() => dispatch(logoutThunk())}>
                                Exit
                            </Button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default Header;
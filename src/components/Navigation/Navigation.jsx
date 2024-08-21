import { NavLink } from "react-router-dom";
import { Link as MUILink } from '@mui/material';
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors"; 
import css from "./Navigation.module.css";

export const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn); 

    return (
        <ul className={css.navList}>
            <li className={css.listItem}>
                <MUILink component={NavLink} to="/" >
                    Home
                </MUILink>
            </li>
            {isLoggedIn && (
                <li className={css.listItem}>
                    <MUILink component={NavLink} to="/contacts">
                        Contacts
                    </MUILink>
                </li>
            )}
        </ul>
    );
}

export default Navigation;

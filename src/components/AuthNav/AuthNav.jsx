import { NavLink } from "react-router-dom";
import { Link as MUILink } from '@mui/material';
import css from "./AuthNav.module.css";

export const AuthNav = () => {
    return (
        <>
            <li className={css.listItem}>
                <MUILink component={NavLink} to="/login">
                    Log In
                </MUILink>
            </li>
            <li className={css.listItem}>
                <MUILink component={NavLink} to="/register">
                    Register
                </MUILink>
            </li>
        </>
    );
}

export default AuthNav;

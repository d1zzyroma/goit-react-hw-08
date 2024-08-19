import { NavLink } from "react-router-dom";
import { Link as MUILink } from '@mui/material';
import css from "./Navigation.module.css";

export const Navigation = () => {
    return (
        <>
            <li className={css.listItem}>
                <MUILink component={NavLink} to="/" >
                    Home
                </MUILink>
                
            </li>
        </>
    );
}

export default Navigation;

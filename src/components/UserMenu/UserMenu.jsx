import { NavLink } from "react-router-dom";
import { Button, Link as MUILink } from '@mui/material';
import css from "./UserMenu.module.css";
import { logoutThunk } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

export const UserMenu = () => {
    const dispatch = useDispatch();
    return (
        <>
            <li className={css.listItem}>
                <MUILink component={NavLink} to="/contacts"  >
                    Contacts
                </MUILink>
            </li>
            <li>
                <Button variant="contained" color="primary" onClick={() => dispatch(logoutThunk())}>
                    Exit
                </Button>
            </li>
        </>
    );
}

export default UserMenu;

import { Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors"; 
import css from "./UserMenu.module.css";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser); 

    return (
        <div className={css.userMenu}>
            <Typography variant="h6" component="p">
                Welcome, {user.name}!
            </Typography>
            <Button variant="contained" color="primary" onClick={() => dispatch(logoutThunk())}>
                Exit
            </Button>
        </div>
    );
}

export default UserMenu;



import css from "./AppBar.module.css"

import {  useSelector } from "react-redux";
import { selectIsLoggeIn, selectsUser } from "../../redux/auth/selectors";


import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";


const AppBar = () => {
    const user = useSelector(selectsUser);
    const isLoggeIn = useSelector(selectIsLoggeIn);

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
                    <Navigation/>
                    {!isLoggeIn && 
                    (<>
                        <AuthNav />
                    </>)}
                    {isLoggeIn && (
                        <UserMenu/>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default AppBar;
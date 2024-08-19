import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";


const LayoutComp = () => {
    return(
        <>
        <AppBar />
        <Outlet />
        
        </>
    )
}

export default LayoutComp;
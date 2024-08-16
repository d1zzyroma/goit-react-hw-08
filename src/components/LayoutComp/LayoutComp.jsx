import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const LayoutComp = () => {
    return(
        <>
        <Header />
        <Outlet />
        
        </>
    )
}

export default LayoutComp;
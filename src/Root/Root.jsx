import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AOS from "aos";

const Root = () => {
    useEffect(()=>{
        AOS.init()
        
    },[])
    return(
        <div>
            <Outlet/>
        </div>
    )}
export default Root;
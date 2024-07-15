import { NavLink, useLocation } from "react-router-dom";
import Button from "../Button";
import { useEffect, useState } from "react";
import { themeClass } from "../../constants/constants";

export default function Header() {    
    const location = useLocation();
    const [isLoginView, setIsLoginView] = useState(true);

    useEffect(() => {
        setIsLoginView(location?.pathname === "/login");
    }, [location]);

    return (
        <header className="relative flex items-center justify-end p-5 gap-1">
            {isLoginView ? (
                <></>
                // <NavLink to="/signup" >
                //     <Button label="Sign Up" customClasses={`${themeClass.themeBtnOutlinePrimary} inline-block`} />
                // </NavLink> 
            ) : (
                <></>
                // <NavLink to="/login">
                //     <Button label="Login" customClasses={themeClass.themeBtnPrimary} />
                // </NavLink>
            )}
        </header>
    )
}
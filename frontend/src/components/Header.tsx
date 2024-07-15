import { Link } from "react-router-dom";
import { storeToken } from "../slicers/authSlice";
import { useDispatch } from "react-redux";
import constants from "../constants/constants";
import Dropdown, { DropdownMenuItemPropsType } from "./Dropdown";
import Navbar, { NavbarMenuItemPropsType } from "./Navbar";
import axiosClient from "../axios-client";

export default function Header() {

    const dispatch = useDispatch();

    const logoutAction = () => {
        axiosClient.post('/logout', )
        dispatch(storeToken(null));
    }

    const topRightMenuList:DropdownMenuItemPropsType[] = [
        { title: 'Profile', link: "/profile" }, 
        { title: 'Logout', handleClick: logoutAction }
    ];
    const navBarMenuList:NavbarMenuItemPropsType[] = [
        { title: 'Feedback', link: "/feedback" }
    ];

    return (
        <>
            <header data-te-navbar-ref
                className="flex-no-wrap relative flex w-full items-center justify-between bg-white py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start">
                
                <div className="flex w-full flex-wrap items-center justify-between px-3">

                    <Navbar menuList={navBarMenuList}>
                        {/**  Logo  */}
                        <Link className="mb-4 mr-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
                            to={'/'}>
                            <img src={constants.logo} style={{ height: "30px" }} alt=""
                                loading="lazy" />
                        </Link>
                    </Navbar>

                    {/**  Right elements  */}
                    <Dropdown menuList={topRightMenuList} >
                        <img src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg" className="rounded-full"
                            style={{ height: '25px', width: '25px' }} alt="" loading="lazy" />
                    </Dropdown>
                </div>

            </header>
        </>
    )
}
import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'

export interface NavbarMenuItemPropsType {
    title: string,
    link: string
}
interface NavbarPropsType {
    menuList: NavbarMenuItemPropsType[],
    children?: ReactElement
}

export default function Navbar({ menuList, children }:NavbarPropsType) {
    return (
        <div className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContent1" data-te-collapse-item>

            {children}

            {/**  Left navigation links  */}
            <ul className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row" data-te-navbar-nav-ref>
                { menuList.map((menuItem, key) => (

                    <li className="mb-4 lg:mb-0 lg:pr-2" key={key} data-te-nav-item-ref>
                        {/**  Dashboard link  */}
                        <Link className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                            to={ menuItem.link } data-te-nav-link-ref>
                            { menuItem.title }
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

    )
}

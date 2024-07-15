import { ReactElement } from "react";
import { Link } from "react-router-dom";
import {
  TEDropdown,
  TEDropdownToggle,
  TEDropdownMenu,
  TEDropdownItem,
  TERipple,
} from "tw-elements-react";

export interface DropdownMenuItemPropsType {
  title: string,
  link?: string,
  handleClick?: () => void
}
interface DropdownPropsType {
  menuList: DropdownMenuItemPropsType[],
  children: ReactElement
}

export default function Dropdown({ menuList, children }: DropdownPropsType) {
  return (
    <TEDropdown className="flex justify-center">
      <TERipple rippleColor="light">
        <TEDropdownToggle className="flex items-center whitespace-nowrap rounded-full bg-primary text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
          {children}
        </TEDropdownToggle>
      </TERipple>

      <TEDropdownMenu>
        {menuList.map((menuItem, key) => (
          menuItem.handleClick ? (
            <TEDropdownItem key={key}>
              <button onClick={menuItem.handleClick} className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
                {menuItem.title}
              </button>
            </TEDropdownItem>
          ) : (
            <TEDropdownItem key={key}>
              <Link to={menuItem.link || '#'} className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
                {menuItem.title}
              </Link>
            </TEDropdownItem>
          )
        ))}
      </TEDropdownMenu>
    </TEDropdown>
  );
}
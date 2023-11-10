'use client'
import React, {FC, useEffect, useState} from "react";
import {Avatar, Dropdown, Label, Navbar, TextInput} from "flowbite-react";
import {BiChevronRightCircle} from "react-icons/bi";
import {useSidebarContext} from "@/app/context/SidebarContext";
import Link from "next/link";
import isSmallScreen from "@/helpers/is-small-screen";
import {HiMenuAlt1, HiSearch, HiX} from "react-icons/hi";


const Header: FC<Record<string, never>> = function () {
    const {isOpenOnSmallScreens, isPageWithSidebar, setOpenOnSmallScreens} = useSidebarContext();
    const [isSmall, setIsSmall] = useState(typeof window !== 'undefined' && window.innerWidth < 768);
    useEffect(() => {
        function handleResize() {
            setIsSmall(typeof window !== 'undefined' && window.innerWidth < 768);
        }
        if (typeof window !== 'undefined') {
            window.addEventListener("resize", handleResize);
            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, []);

    return (
        <header className="sticky top-0 z-20">
            <Navbar fluid>
                <div className="w-full p-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            {isPageWithSidebar && (
                                <button
                                    onClick={() => setOpenOnSmallScreens(!isOpenOnSmallScreens)}
                                    className="mr-3 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:inline"
                                >
                                    <span className="sr-only">Toggle sidebar</span>
                                    {isOpenOnSmallScreens && isSmallScreen() ? (
                                        <HiX className="h-6 w-6"/>
                                    ) : (
                                        <HiMenuAlt1 className="h-6 w-6"/>
                                    )}
                                </button>
                            )}
                            <Navbar.Brand href="/">
                                <img
                                    alt=""
                                    src="/static/logo.png"
                                    className="mr-1 h-6 sm:h-8"
                                />
                            </Navbar.Brand>
                            <form className="ml-16 hidden md:block">
                                <Label htmlFor="search" className="sr-only">
                                    Search
                                </Label>
                                <TextInput
                                    id="search"
                                    name="search"
                                    placeholder="Search"
                                    required
                                    size={32}
                                    type="search"
                                />
                            </form>
                        </div>
                        <div className="flex items-center lg:gap-3">
                            <div className="flex items-center">
                                <button
                                    onClick={() => setOpenOnSmallScreens(!isOpenOnSmallScreens)}
                                    className="cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700 lg:hidden"
                                >
                                    <span className="sr-only">Search</span>
                                    <HiSearch className="h-6 w-6"/>
                                </button>

                            </div>
                            <div className="hidden lg:block">
                                <UserDropdown/>
                            </div>
                        </div>
                    </div>
                </div>
            </Navbar>
        </header>
    );
};
const UserDropdown: FC = function () {
    return (
        <Dropdown
            arrowIcon={false}
            inline
            label={
                <span>
          <span className="sr-only">User menu</span>
          <Avatar
              alt=""
              img="/static/images/users/neil-sims.png"
              rounded
              size="sm"
          />
        </span>
            }
        >
            <Dropdown.Header>
                <span className="block text-sm">Neil Sims</span>
                <span className="block truncate text-sm font-medium">
          rahman@tikweb.com
        </span>
            </Dropdown.Header>
            <Link href="/">
                <Dropdown.Item>
                    Dashboard
                </Dropdown.Item>
            </Link>
            <Link href="/users/settings">
                <Dropdown.Item>
                    Settings
                </Dropdown.Item>
            </Link>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider/>
            <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
    );
};
export default Header;

'use client'
import React, {FC, useEffect, useState} from "react";
import {Navbar} from "flowbite-react";
import {BiChevronRightCircle} from "react-icons/bi";
import {useSidebarContext} from "@/app/context/SidebarContext";

const Header: React.FC<{ title: string, }> = ({title}) => {

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
                {isPageWithSidebar && (
                    <button
                        aria-controls="sidebar"
                        aria-expanded="true"
                        className="mr-2 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700 lg:hidden"
                        onClick={() => setOpenOnSmallScreens(!isOpenOnSmallScreens)}

                    >
                        {isOpenOnSmallScreens ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill="white"/>
                                <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#F1F2F2"/>
                                <path d="M14 16L10 12L14 8" stroke="black" strokeWidth="1.5" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill="white"/>
                                <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#F1F2F2"/>
                                <path d="M14 16L10 12L14 8" stroke="black" strokeWidth="1.5" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                        )}
                    </button>
                )}
                <Navbar.Brand>
                    {
                        !isSmall && (
                            <button
                                style={{marginLeft: '-30px'}}
                                onClick={() => setOpenOnSmallScreens(!isOpenOnSmallScreens)}>

                                {isOpenOnSmallScreens ? (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill="white"/>
                                        <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#F1F2F2"/>
                                        <path d="M10 16L14 12L10 8" stroke="black" strokeWidth="1.5" strokeLinecap="round"
                                              strokeLinejoin="round"/>
                                    </svg>


                                ) : (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill="white"/>
                                        <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#F1F2F2"/>
                                        <path d="M14 16L10 12L14 8" stroke="black" strokeWidth="1.5" strokeLinecap="round"
                                              strokeLinejoin="round"/>
                                    </svg>
                                )}

                            </button>
                        )

                    }

                    <span className="self-center whitespace-nowrap px-5 text-xl font-semibold dark:text-white">
                        {title ? title : 'Home'}
                    </span>
                </Navbar.Brand>
            </Navbar>
        </header>
    );
};

export default Header;

'use client'
import React, {ReactNode, useEffect, useState} from "react";
import {getLocalSession, removeLocalSession} from "@/components/api/localStorage/utils";
import {useRouter} from "next/navigation";
import Header from "@/components/header";
import {SidebarProvider} from "@/app/context/SidebarContext";
import Sidebar from "@/components/sidebar";
import {HiOutlineHome} from "react-icons/hi";
import {HiOutlineMegaphone} from "react-icons/hi2";
import {MdOutlinePhotoLibrary} from "react-icons/md";
import {TbUserSquare} from "react-icons/tb";
import {FiLogOut} from "react-icons/fi";
import Link from "next/link";
import {router} from "next/client";
import {useSession, signOut} from "next-auth/react";

// interface ChildProps {
//     children: React.ReactNode;
// }

export default function MainLayout({children}: { children: ReactNode }) {
    const router = useRouter()
//     const session = getLocalSession()
//     useEffect(() => {
//         getLocalSession() === null && router.push("/login");
//     }, [router]);
    const [activeItem, setActiveItem] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const handleLogout = () => {
        router.push('/login')
        removeLocalSession()
    }
    const handleActiveItemChange = (item: string) => {
        setActiveItem(item);
    };
//     if (session === null) {
//         return null;
//     }

    const {status} = useSession();
    const isLoggedIn = status === 'authenticated';
    if (isLoggedIn) {
        setLoggedIn(true)
    }
    if (!isLoggedIn){
        router.push('/login')
        return null
    }

    return (
        loggedIn && <SidebarProvider>
            <div className="flex">
                <div className="order-1">
                    <ActualSidebar
                        activeItem={activeItem} setActiveItem={setActiveItem}
                        onActiveItemChange={handleActiveItemChange}
                        onLogoutButtonClick={handleLogout}/>
                </div>
                <div className={'order-2'}>
                    <Header title={activeItem}/>
                    <main className="order-2 mx-4 mt-4 mb-24 flex-[1_0_16rem]">
                        {children}
                    </main>
                </div>

            </div>
        </SidebarProvider>

    );
};

// ActualSidebar component
const ActualSidebar: React.FC<{ activeItem: string, onActiveItemChange: (item: string) => void, onLogoutButtonClick: () => void }> = ({
                                                                                                                                          activeItem,
                                                                                                                                          onActiveItemChange,
                                                                                                                                          onLogoutButtonClick
                                                                                                                                      }) => {
    const handleItemClick = (item) => {
        onActiveItemChange(item);
    };

    const logOutButtonClick = () => {
        onLogoutButtonClick()
    }
    return (
        <Sidebar aria-label="Sidebar">
            <div className="flex h-[calc(100vh-5rem)] flex-col">
                <Sidebar.Logo className={'justify-center mb-0'}>
                    <img
                        alt=""
                        src="/static/logo.svg"
                        className="mr-1 w-full sm:h-12 text-center justify-center"
                    />
                </Sidebar.Logo>
                <Sidebar.ItemGroup>
                    <Sidebar.Item
                        onClick={() => handleItemClick('Home')}
                        href="/dashboard"
                        as={Link}
                        icon={HiOutlineHome}
                        className="p-4"
                    >
                        Home
                    </Sidebar.Item>
                    <Sidebar.Item
                        onClick={() => handleItemClick('Admin')}
                        href="/admin"
                        as={Link}
                        icon={TbUserSquare}
                        className='p-4'
                    >
                        Profile
                    </Sidebar.Item>
                    <Sidebar.Item
                        icon={MdOutlinePhotoLibrary}
                        href="/gallery"
                        as={Link}
                        className='p-4'
                    >
                        gallery
                    </Sidebar.Item>
                    {/*<Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">*/}
                    {/*    <Sidebar.Item href="#">Products</Sidebar.Item>*/}
                    {/*    <Sidebar.Item href="#">Sales</Sidebar.Item>*/}
                    {/*    <Sidebar.Item href="#">Refunds</Sidebar.Item>*/}
                    {/*    <Sidebar.Item href="#">Shipping</Sidebar.Item>*/}
                    {/*</Sidebar.Collapse>*/}
                    {/* ... (other sidebar items) */}
                    <Sidebar.Item
                        icon={HiOutlineMegaphone}
                        href="/advertisement"
                        className="p-4"
                        as={Link}
                    >
                        Advertisement
                    </Sidebar.Item>

                </Sidebar.ItemGroup>
            </div>
            <div className="flex">
                <Sidebar.ItemGroup>
                    <Sidebar.Item
                        onClick={() => signOut}
                        href="/login"
                        as={Link}
                        icon={FiLogOut}
                        className="p-4"
                    >
                        Logout
                    </Sidebar.Item>
                </Sidebar.ItemGroup>

            </div>
        </Sidebar>
    );
};

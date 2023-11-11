'use client'
import React, {useEffect, useState} from "react";
import {getLocalSession} from "@/components/api/localStorage/utils";
import {useRouter} from "next/navigation";
import Header from "@/components/header";
import {SidebarProvider} from "@/app/context/SidebarContext";
import Sidebar from "@/components/sidebar";
import {HiArrowSmRight, HiChartPie, HiShoppingBag, HiTable} from "react-icons/hi";
import Link from "next/link";

interface ChildProps {
    children: React.ReactNode;
}


const AdminLayout: React.FC<ChildProps> = ({children}) => {
    // const [localeSession, setLocalSession] = useState()
    // const router = useRouter()
    // useEffect(() => {
    //     console.log(getLocalSession())
    //     getLocalSession() === null && router.push("/login");
    // }, [router]);
    const [activeItem, setActiveItem] = useState('');

    const handleActiveItemChange = (item: string) => {
        // Handle the state change in the AdminLayout component
        setActiveItem(item);
    };
    console.log(activeItem)
    return (
        <SidebarProvider>
            <div className="flex">
                <div className="order-1">
                    <ActualSidebar setActiveItem={setActiveItem} onActiveItemChange={handleActiveItemChange} />
                </div>
                <div className={'order-2'}>
                    <Header/>
                    <main className="order-2 mx-4 mt-4 mb-24 flex-[1_0_16rem]">
                        {children}
                    </main>
                </div>

            </div>
        </SidebarProvider>
    );
};

const ActualSidebar: React.FC<{ setActiveItem: React.Dispatch<React.SetStateAction<string>>, onActiveItemChange: (item: string) => void }> = ({ setActiveItem, onActiveItemChange }) => {
    const [activeItem, setActiveItemLocal] = useState('');

    const handleItemClick = (item) => {
        setActiveItem(item);
        // Update local state immediately for visual feedback
        setActiveItemLocal(item);
        onActiveItemChange(item); // Notify the parent component of the state change
        // You can add additional logic or redirect to the selected item's href here if needed
    };

    useEffect(() => {
        // Use useEffect to apply the class after the state is updated
        setActiveItemLocal(activeItem);
    }, [activeItem]);

    return (
        <Sidebar aria-label="Sidebar with multi-level dropdown example">

            <Sidebar.Items>
                <Sidebar.Logo className={'justify-center'}>
                    <img
                        alt=""
                        src="/static/logo.png"
                        className="mr-1 h-6 w-full sm:h-12 text-center justify-center"
                    />
                </Sidebar.Logo>
                <Sidebar.ItemGroup>
                    <Sidebar.Item
                        onClick={() => handleItemClick('/')}
                        href="/"
                        as={Link}
                        icon={HiChartPie}
                        className={ activeItem === '/' ? 'bg-primary-900 text-white hover:bg-gray-100 hover:text-primary-100' : ''}
                    >
                        Dashboard
                    </Sidebar.Item>
                    <Sidebar.Item
                        onClick={() => handleItemClick('admin')}
                        href="/admin"
                        as={Link}
                        icon={HiChartPie}
                        className={activeItem === 'admin' ? 'bg-primary-900 text-white ' : ''}
                    >
                        Admin
                    </Sidebar.Item>
                    <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
                        <Sidebar.Item href="#">Products</Sidebar.Item>
                        <Sidebar.Item href="#">Sales</Sidebar.Item>
                        <Sidebar.Item href="#">Refunds</Sidebar.Item>
                        <Sidebar.Item href="#">Shipping</Sidebar.Item>
                    </Sidebar.Collapse>
                    {/* ... (other sidebar items) */}
                    <Sidebar.Item
                        icon={HiArrowSmRight}
                        href="/login"

                    >
                        Sign In
                    </Sidebar.Item>
                    <Sidebar.Item
                        icon={HiTable}
                        href="/signup"
                    >
                        Sign Up
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}
export default AdminLayout;
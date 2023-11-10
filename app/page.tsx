"use client";
import React, {useState} from "react";
import { Avatar } from 'flowbite-react';
import logo from '@/public/static/logo.png'
import {
    HiArrowSmRight,
    HiChartPie,
    HiEye,
    HiInbox,
    HiShoppingBag,
    HiTable,
    HiUser,
    HiViewBoards,
} from "react-icons/hi";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import {SidebarProvider} from "./context/SidebarContext";
import {AlertFunction} from "@/components/Alert";
import Link from "next/link";
import AdminLayout from "@/components/layouts/adminLayout";

type ChildProps =  {
    children: React.ReactNode;
}
const Index: React.FC<ChildProps> = ({ children }) => {
    return (
        <AdminLayout>
            <div className="flex">
                <div className="order-1">
                    <ActualSidebar/>
                </div>
                <div className={'order-2'}>
                    <Header />
                    <main className="order-2 mx-4 mt-4 mb-24 flex-[1_0_16rem]">
                        <HomePage/>
                    </main>
                </div>

            </div>
        </AdminLayout>
    );
}

export function ActualSidebar(): JSX.Element {
    return (
        <Sidebar aria-label="Sidebar with multi-level dropdown example">

            <Sidebar.Items>
               <Sidebar.Logo>
                   <img
                       alt=""
                       src="/static/logo.png"
                       className="mr-1 h-6 w-full sm:h-8 text-center justify-center"
                   />
               </Sidebar.Logo>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={HiChartPie}>
                        Dashboard
                    </Sidebar.Item>
                    <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
                        <Sidebar.Item href="#">Products</Sidebar.Item>
                        <Sidebar.Item href="#">Sales</Sidebar.Item>
                        <Sidebar.Item href="#">Refunds</Sidebar.Item>
                        <Sidebar.Item href="#">Shipping</Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Item href="#" icon={HiInbox}>
                        Inbox
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiUser}>
                        Users
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiShoppingBag}>
                        Products
                    </Sidebar.Item>
                    <Sidebar.Item icon={HiArrowSmRight} href="/login">
                        Sign In
                    </Sidebar.Item>
                    <Sidebar.Item icon={HiTable} href="/signup">
                        Sign Up
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}

function HomePage() {
    return (
        <div className="p-6">
            <section>
                <header>
                    <h1 className="mb-6 text-5xl font-extrabold dark:text-white">
                        Welcome to <code>Flowbite</code> on <code>Next.js</code>!
                    </h1>
                </header>
            </section>
            <section>
                <header>
                    <h2 className="mb-3 text-4xl font-bold dark:text-gray-200">Alert</h2>
                </header>
                <img
                    alt=""
                    src="../public/next.svg"
                    className="mr-1 h-6 sm:h-8"
                />
                <AlertFunction/>
            </section>
        </div>
    );
}

export  default Index

"use client";

import {
    Accordion,
    Alert,
    Avatar,
    Sidebar as FlowbiteSidebar,
} from "flowbite-react";


import React, {useState} from "react";
import {BiBuoy} from "react-icons/bi";
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
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import {SidebarProvider} from "./context/SidebarContext";
import {AlertFunction} from "@/components/Alert";

export default function Index(): JSX.Element {
    return (
        <SidebarProvider>
            <Header/>
            <div className="flex">
                <div className="order-1">
                    <ActualSidebar/>
                </div>
                <main className="order-2 mx-4 mt-4 mb-24 flex-[1_0_16rem]">
                    <HomePage/>
                </main>
            </div>
        </SidebarProvider>
    );
}

function ActualSidebar(): JSX.Element {
    return (
        <Sidebar>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={HiChartPie}>
                        Dashboard
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiViewBoards}>
                        Kanban
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiInbox}>
                        Inbox
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiUser}>
                        Users
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiShoppingBag}>
                        Products
                    </Sidebar.Item>
                    <Sidebar.Item href="/login" icon={HiArrowSmRight}>
                        Sign In
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiTable}>
                        Sign Up
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={HiChartPie}>
                        Upgrade to Pro
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiViewBoards}>
                        Documentation
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={BiBuoy}>
                        Help
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
                <AlertFunction/>
            </section>
        </div>
    );
}

function AccordionExample(): JSX.Element {
    return (
        <Accordion flush>
            <Accordion.Panel>
                <Accordion.Title>What is Flowbite?</Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Flowbite is an open-source library of interactive components built
                        on top of Tailwind CSS including buttons, dropdowns, modals,
                        navbars, and more.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                        Check out this guide to learn how to{" "}
                        <a
                            href="https://flowbite.com/docs/getting-started/introduction/"
                            className="text-blue-600 hover:underline dark:text-blue-500"
                        >
                            get started
                        </a>{" "}
                        and start developing websites even faster with components on top of
                        Tailwind CSS.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>Is there a Figma file available?</Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Flowbite is first conceptualized and designed using the Figma
                        software so everything you see in the library has a design
                        equivalent in our Figma file.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                        Check out the{" "}
                        <a
                            href="https://flowbite.com/figma/"
                            className="text-blue-600 hover:underline dark:text-blue-500"
                        >
                            Figma design system
                        </a>{" "}
                        based on the utility classes from Tailwind CSS and components from
                        Flowbite.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>
                    What are the differences between Flowbite and Tailwind UI?
                </Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        The main difference is that the core components from Flowbite are
                        open source under the MIT license, whereas Tailwind UI is a paid
                        product. Another difference is that Flowbite relies on smaller and
                        standalone components, whereas Tailwind UI offers sections of pages.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        However, we actually recommend using both Flowbite, Flowbite Pro,
                        and even Tailwind UI as there is no technical reason stopping you
                        from using the best of two worlds.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Learn more about these technologies:
                    </p>
                    <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                        <li>
                            <a
                                href="https://flowbite.com/pro/"
                                className="text-blue-600 hover:underline dark:text-blue-500"
                            >
                                Flowbite Pro
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://tailwindui.com/"
                                rel="nofollow"
                                className="text-blue-600 hover:underline dark:text-blue-500"
                            >
                                Tailwind UI
                            </a>
                        </li>
                    </ul>
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    );
}

function AlertsExample(): JSX.Element {
    return (
        <Alert
            color="success"
            rounded={false}
            withBorderAccent
            onDismiss={console.log}
            additionalContent={
                <React.Fragment>
                    <div className="mt-2 mb-4 text-sm text-green-700 dark:text-green-800">
                        More info about this info alert goes here. This example text is
                        going to run a bit longer so that you can see how spacing within an
                        alert works with this kind of content.
                    </div>
                    <div className="flex">
                        <button
                            type="button"
                            className="mr-2 inline-flex items-center rounded-lg bg-green-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-800 dark:hover:bg-green-900"
                        >
                            <HiEye className="-ml-0.5 mr-2 h-4 w-4"/>
                            View more
                        </button>
                        <button
                            type="button"
                            className="rounded-lg border border-green-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-green-700 hover:bg-green-800 hover:text-white focus:ring-4 focus:ring-green-300 dark:border-green-800 dark:text-green-800 dark:hover:text-white"
                        >
                            Dismiss
                        </button>
                    </div>
                </React.Fragment>
            }
        >
            <h3 className="text-lg font-medium text-green-700 dark:text-green-800">
                This is a info alert
            </h3>
        </Alert>
    );
}

function AvatarExample(): JSX.Element {
    return (
        <Avatar
            bordered
            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            rounded
        />
    );
}


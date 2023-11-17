import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from "@/components/sidebar";
import {signOut} from "next-auth/react";
import {HiOutlineHome, HiOutlineMegaphone} from "react-icons/hi2";
import {TbUserSquare} from "react-icons/tb";
import Link from "next/link";
import {MdOutlinePhotoLibrary} from "react-icons/md";

MainSideBar.propTypes = {

};

function MainSideBar(props) {
    return (
        <div></div>
    );
}

const ActualSidebar: React.FC<{}> = ({}) => {
    // const handleItemClick = (item) => {
    //     onActiveItemChange(item);
    // };
    //
    // const logOutButtonClick = () => {
    //     onLogoutButtonClick()
    // }
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
                        // onClick={() => handleItemClick('Home')}
                        href="/dashboard"
                        as={Link}
                        icon={HiOutlineHome}
                        className="p-4"
                    >
                        Home
                    </Sidebar.Item>
                    <Sidebar.Item
                        // onClick={() => handleItemClick('Admin')}
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

export default MainSideBar;
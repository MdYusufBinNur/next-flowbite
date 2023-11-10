import classNames from "classnames";
import {Sidebar as FlowbiteSidebar} from "flowbite-react";
import type {FC, PropsWithChildren} from "react";
import {useSidebarContext} from "@/app/context/SidebarContext";
import isSmallScreen from "@/helpers/is-small-screen";
import Link from 'next/link';
import isBrowser from "@/helpers/is-browser";
import {
    HiAdjustments,
    HiChartPie,
    HiChartSquareBar,
    HiCog,
    HiInboxIn,
    HiLockClosed,
    HiSearch,
    HiShoppingBag,
    HiUsers,
    HiViewGrid,
} from "react-icons/hi";

const Sidebar: FC<PropsWithChildren<Record<string, unknown>>> = function ({children}) {
    const {isOpenOnSmallScreens: isSidebarOpenOnSmallScreens} = useSidebarContext();
    return (
        <div className={classNames(
            "fixed overflow-auto top-0 h-screen z-10 lg:sticky lg:!block",
            {
                hidden: !isSidebarOpenOnSmallScreens,
            })}>
            <FlowbiteSidebar
                collapsed={isSidebarOpenOnSmallScreens && !isSmallScreen()}
            >
                {children}
            </FlowbiteSidebar>
        </div>
    );
};

export default Object.assign(Sidebar, {...FlowbiteSidebar});
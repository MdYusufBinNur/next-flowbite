'use client'
import React, {useEffect, useState} from "react";
import {getLocalSession} from "@/components/api/localStorage/utils";
import {useRouter} from "next/navigation";
import Header from "@/components/header";
import {SidebarProvider} from "@/app/context/SidebarContext";
import {ActualSidebar} from "@/app/page";

interface ChildProps {
    children: React.ReactNode;
}


const AdminLayout: React.FC<ChildProps> = ({children}) => {
    const [localeSession, setLocalSession] = useState()
    const router = useRouter()
    useEffect(() => {
        console.log(getLocalSession())
        getLocalSession() === null && router.push("/login");
    }, [router]);

    return (
        <SidebarProvider>
            {children}
        </SidebarProvider>
    );
};

export default AdminLayout;
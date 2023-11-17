'use client'
import React, {FC} from "react";
import MainLayout from "@/app/page";
import {getCurrentUser} from "@/lib/session";

const DashboardPage: FC =  function () {
    const user = getCurrentUser();
    console.log('dashboard : ', user)
    return (
        <MainLayout>
            <div className="p-6">
                <section>
                    <header>
                        <h1 className="mb-6 text-5xl font-extrabold dark:text-white text-center justify-center">
                            Welcome to <code>BrollopsGuiden</code> Dashboard
                        </h1>
                    </header>
                </section>
            </div>

        </MainLayout>
    )
}
export default DashboardPage
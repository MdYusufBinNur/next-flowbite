'use client'
import React, {FC} from "react";
import {AlertFunction} from "@/components/Alert";
import MainLayout from "@/app/page";

const AlertPage: FC = function () {
    return (
        <MainLayout>
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

        </MainLayout>
    )
}
export default AlertPage
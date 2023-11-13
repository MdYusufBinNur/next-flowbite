'use client'
import React, {FC} from "react";
import MainLayout from "@/app/page";

const GalleryPage: FC = function () {
    return (
        <MainLayout>
            <div className="p-6">
                <section>
                    <header>
                        <h1 className="mb-6 text-5xl font-extrabold dark:text-white">
                            Gallery section
                        </h1>
                    </header>
                </section>
            </div>

        </MainLayout>
    )
}
export default GalleryPage
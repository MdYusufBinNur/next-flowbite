'use client'
import React, {ReactNode, useEffect, useState} from 'react';

const Toaster: React.FC<{ duration: number; children:ReactNode }> = ({ duration, children }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsVisible(false);
        }, duration);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [duration]);

    return (
        <>
            {isVisible && (
                <div className="fixed top-4 right-4 bg-red-500 text-white p-4 rounded-md shadow-md">
                    {children}
                </div>
            )}
        </>
    );
};

export default Toaster;

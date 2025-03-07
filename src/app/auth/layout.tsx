import React from "react";

export default function layout({children}: {children: React.ReactNode}) {
    return (
        <div
            style={{ backgroundImage: "url('/images/backgroundImage.png')" }}
            className="bg-cover bg-center bg-no-repeat text-white opacity-90">
            <div className="flex min-h-screen flex-col items-center justify-center py-2">
                {children}
            </div>
        </div>
    );
}
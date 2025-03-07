import React from "react";

export default function layout({children}: {children: React.ReactNode}){
    return(
        <div>
            <h1 className="text-2xl font-bold"> Layout Wrapper</h1>

            <div className="border border-blue-300 border-dashed p-4">
                {children}
            </div>
        </div>
    );
}

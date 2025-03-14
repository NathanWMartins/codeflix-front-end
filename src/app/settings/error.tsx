'use client'
import React from "react";

export default function Error({error, reset}: any){
    React.useEffect(() => {
        console.log('logging error:', error);
    }, [error]);
    return(
        <div className="text-red"> 
            <h1 className="text-2xl font-bold">Error Page</h1>
            <div className="border border-dashed border-red-500 p-4">
                <p> Something went wrong</p>
            </div>
        </div>
    );
}
'use client';
import React, { useEffect, useState } from "react";
import { UserProfile } from "./UserProfile";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { useScroll } from "../hooks/useScroll";

export default function Header() {
    const isScrolled = useScroll();

    return (
        <header
            className={`${isScrolled && 'bg-gray-700'}
            fixed top-0 z-50
            flex w-full items-center justify-between bg-gradient-to-t from-transparent to-black p-2 px-4 transition-all lg:px-16 lg:py-4`}
        >
            <div className="flex items-center space-x-2 md:space-x-8 ">
                <Logo />
                <NavLinks/>
            </div>
            <UserProfile/>
        </header>
    );
}
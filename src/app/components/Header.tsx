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
            className={`${isScrolled ? 'bg-black' : 'bg-transparent'} fixed top-0 z-50 w-full flex items-center 
            justify-between p-2 px-4 lg:px-16 lg:py-4 transition-all duration-300 ease-in-out`}
        >
            <div className="flex items-center space-x-2 md:space-x-8 ">
                <Logo />
                <NavLinks />
            </div>
            <UserProfile />
        </header>
    );
}
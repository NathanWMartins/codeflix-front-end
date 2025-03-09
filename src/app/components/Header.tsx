'use client';
import React, { useEffect, useState } from "react";
import { UserProfile } from "./UserProfile";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { useScroll } from "../hooks/useScroll";
import { useRouter, useSearchParams } from 'next/navigation';
import { SearchForm } from "./SearchForm";
import Link from "next/link";



export default function Header() {
    const isScrolled = useScroll();
    const router = useRouter();
    const params = useSearchParams();
    const initialSearchTerm = params.get('title') || '';
    const [searchTerm, setSearchTerm] = useState<string>(initialSearchTerm);

    const onSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const onSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newParams = new URLSearchParams(params.toString());
        newParams.set('title', searchTerm);
        router.push(`/search?${newParams.toString()}`);
    };


    return (
        <header
            className={`${isScrolled ? 'bg-black' : 'bg-transparent'} fixed top-0 z-50 w-full flex items-center 
            justify-between p-2 px-4 lg:px-16 lg:py-4 transition-all duration-300 ease-in-out`}
        >
            <div className="flex items-center space-x-2 md:space-x-8 ">
                <Link href='/'>
                    <Logo />
                </Link>
                <NavLinks />
            </div>
            <div className='flex items-center space-x-2 md:space-x-8'>
                <SearchForm
                    onSearch={onSearch}
                    searchTerm={searchTerm}
                    onSearchTermChange={onSearchTermChange}
                />
                <UserProfile />
            </div>
        </header>
    );
}
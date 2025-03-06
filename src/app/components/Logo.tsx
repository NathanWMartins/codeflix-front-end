import React from 'react';
import Image from 'next/image';

export const Logo = () => (
    <Image
        src='/images/LogoCodeflix.png'
        alt='codeflix'
        width={180}
        height={180}
        className="cursor-pointer"
    />
);
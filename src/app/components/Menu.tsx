"use client";

import React, { useState } from 'react'
import Image from "next/image"
import Link from 'next/link';
import Carticon from './Carticon';

const links = [
    { id: 1, title: "Homepage", url: "/"},
    { id: 2, title: "Menu", url: "/Menu"},
    { id: 3, title: "Hours", url: "/"},
    { id: 4, title: "Contact", url: "/"}
];

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {!isOpen ? (
                <Image src="/open.png" alt="" width={20} height={20} onClick={() => setIsOpen(true)} />
            ) : (
                <Image src="/close.png" alt="" width={20} height={20} onClick={() => setIsOpen(false)} />
            )}
            
            {isOpen && (
                <div className='bg-orange-300 absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-5 items-center justify-center text-2xl z-10'>
                    {links.map(item => (
                        <Link href={item.url} key={item.id} onClick={() => setIsOpen(false)}>{item.title}</Link>
                    ))}

                    <Link href="/cart" onClick={() => setIsOpen(false)}>
                        <Carticon />
                    </Link>
                
                </div>
            )}
        </div>
    );
};

export default Menu
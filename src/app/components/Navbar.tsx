import React from 'react';
import Menu from './Menu';
import Link from "next/link";
import Image from 'next/image';
import Carticon from './Carticon';

const Navbar = () => {
    const user = false;
    return (
        <div className='h-12 p-4 flex justify-between items-center border-b-2 border-b-orange-200 md:h-24 lg:px-20 xl:px-40'>
            <div className='hidden md:flex gap-4 flex-1'>
                <Link href='/'>Home</Link>
                <Link href='/menu'>Menu</Link>
                <Link href='/contact'>Contact</Link>
            </div>
            {/* logo */}
            <div className='md:flex items-center justify-center flex-1'>
                <Link href="/">
                    <Image src="/zen.png" alt="Logo" width={90} height={90}/>
                </Link>
            </div>
            {/* mobile menu */}
            <div className='md:hidden'>
                <Menu />
            </div>

            <div className="hidden md:flex gap-4 items-center justify-end flex-1">
                <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
                    <span>123 456 7890</span>
                </div>
                {!user ? (
                    <Link href="/login">Login</Link>
                    ) : (
                    <Link href="/orders">Orders</Link>
                    )}
                <Carticon/>
            </div>
        </div>
    );
};

export default Navbar;
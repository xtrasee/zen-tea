import React from 'react';
import Menu from './Menu';
import Link from "next/link";
import Image from 'next/image';
import MenuPage from '../menu/page';

const Navbar = () => {
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

            <div className='hidden md:flex justify-end flex-1'>
                <Link href='/'>
                    <Image src='/cart.png' alt='' width={20} height={20}></Image>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
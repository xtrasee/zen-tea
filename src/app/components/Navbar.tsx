import React from 'react';
import Menu from './Menu';
import Link from "next/link";
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className='h-12 p-4 flex justify-between items-center border-b-2 border-b-gray-200'>
            {/* logo */}
            <div>
                <Link href="/">
                    <Image src="/zen.png" alt="Logo" width={75} height={75}/>
                    
                </Link>
            </div>
            {/* mobile menu */}
            <div>
                <Menu />
            </div>
        </div>
    );
};

export default Navbar;
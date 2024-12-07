import React from 'react'
import { menu } from '../data'
import Link from 'next/link'


const MenuPage = () => {
    return (
        <div className='p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-calc(100vh-9rem)] flex flex-col md:flex-row items-center'>
            {menu.map((item) => (
                <Link
                    href={`/menu/$item.slug}`}
                    key={item.id}
                    className="w-full h-1/3 bg-cover p-8 md:h-1/2"
                    style={{
                        backgroundImage: `url(${item.img})`,
                        backgroundColor: `${item.color}`,
                        backgroundPosition: `bottom left 30px`,
                        backgroundRepeat: 'no-repeat'
                    }}>
                    <div className='w-1/2'>
                        <h1 className='uppercase font-bold text-3xl'>{item.title}</h1>
                        <p className='text-sm my-8'>{item.desc}</p>
                        <button className={`hidden xl:block bg-${item.color} py-2 px-4 rounded-md ring-1 ring-orange-400 hover:bg-orange-400`}>Explore</button>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default MenuPage
import React from 'react'
import Image from 'next/image'
import { featuredProducts } from '../data'
import Link from 'next/link'

const Featured = () => {
  return (
      <div className='w-screen overflow-x-scroll'>
          {/* wrapper */}
          <div className='w-max flex'>
              {/* single item */}
              {
                  featuredProducts.map((item) => (
                    <div key={item.id} className='w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-orange-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]'>
                    {/* img container */}
                        <div className='relative flex-1 w-full hover:animate-shake'>
                              <Image
                                  src={item.img as string}
                                  alt=""
                                  className="object-contain"
                                  fill
                              />
                        </div>
                    {/* text */}
                        <div className='flex-1 flex flex-col items-center justify-center text-center gap-4'>
                            <h1 className='text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl'>{item.title}</h1>
                            <p className='p-4 2xl:p-8'>{item.desc}</p>
                              <span className='text-xl font-bold'>${item.price}</span>
                              <Link href="/menu">
                              <button className='bg-orange-300 p-2 rounded-md'>Add to Cart</button>
                            </Link>
                        </div>
                    </div>
                  ))
              }
          </div>
    </div>
  )
}

export default Featured
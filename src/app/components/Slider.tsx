"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const data = [

    {
        id: 1,
        title: 'All our ingredients are derived from Taiwan',
        image: '/cov1.png'
    },
    {
        id: 2,
        title: 'Made fresh with each order',
        image: '/cov2.png'
    }
]

const Slider = () => {

    const [currSlide, setCurrSlide] = useState(0)  
    
    useEffect(() => {
        const interval = setInterval(
            () => setCurrSlide((prev) => (prev === data.length-1 ? 0 : prev + 1)),
            2000
        );
        return () => clearInterval(interval);
    }, []);

  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row'>
        <div className='flex-1 flex items-center justify-center flex-col gap-8 font-bold bg-orange-100'>
            <h1 className='text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl'>
                {data[currSlide].title}
            </h1>
            <button className='bg-orange-300 py-4 px-8'>Order Now</button>
          </div>
          {/* img container */}
          <div className='relative w-full flex-1'>
              <Image src={data[currSlide].image} alt='' fill className='object-cover'/>
          </div>
    </div>
  )
}

export default Slider
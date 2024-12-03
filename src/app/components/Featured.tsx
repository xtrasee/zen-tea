import React from 'react'
import Image from 'next/image'

const Featured = () => {
  return (
      <div className='w-screen overflow-x-scroll'>
          {/* wrapper */}
          <div className='w-max flex'>
              {/* single item */}
              <div className='w-screen h-[60vh] flex flex-col items-center justify-around'>
                  {/* img container */}
                  <div className='relative flex-1 w-full'>
                      <Image src='/temporary/f1.png' alt='' fill className='object-contain'/>
                  </div>
                  {/* text */}
                  <div className='flex-1 flex flex-col gap-4'>
                      <h1 className='text-xl font-bold uppercase'>Mango Sago Yakult</h1>
                      <p>des</p>
                      <span className='text-xl font-bold'>123</span>
                      <button className='bg-orange-300 p-2 rounded-md'>Add to Cart</button>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Featured
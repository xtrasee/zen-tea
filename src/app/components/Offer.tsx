import React from 'react'
import Image from 'next/image'

const Offer = () => {
  return (
    <div className='bg-beige h-screen flex flex-col md:flex-row md:justify-between md:h-[70vh]'>
      {/* test */}
      <div className='flex-1 flex flex-col justify-center items-center text-center gap-8 p-6'>
        <h1 className='text-5xl font-bold xl:text-6xl'>Buy One Get One Free!</h1>
        <p className='xl:text-xl'>
          Taste the best of both worlds. For now, every order of any milk tea will come with a fruit tea of your choice. Get yours now before the deal is over.
        </p>
        <button className='bg-orange-400 rounded-md py-3 px-6'>Order Now</button>
      </div>
      {/* img */}
      <div className='relative flex-1 w-full md:h-full'>
        <Image src={'/cov2.png'} alt='' fill className='object-cover'/>
      </div>
    </div>
  )
}

export default Offer
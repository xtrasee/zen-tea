import React from 'react'
import Image from 'next/image'

const CartPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col lg:flex-row">
      {/* product contain */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w1/2 lg:px-20 xl:px-40">
        {/* single item */}
        <div className="flex items-center justify-between mb-4">
          <Image src='/temporary/f1.png' alt='' width={100} height={100}></Image>
          <div className="">
            <h1 className='uppercase text-xl font-bold'>yakult</h1>
            <span>Large</span>
          </div>
          <h2 className='font-bold'>$79</h2>
          <span className='cursor-pointer'>X</span>
        </div>
      </div>
      {/* payment container */}
      <div className="h-1/2 p-4 bg-orange-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className='flex justify-between'>
          <span>Subtotal (3 items)</span>
          <span>$12</span>
        </div>
        <div className='flex justify-between'>
          <span>Service Cost</span>
          <span>$0.00</span>
        </div>
        <div className='flex justify-between'>
          <span>Delivery Cost</span>
          <span className='text-green-500'>FREE</span>
        </div>
        <hr className='my-2' />
        <div className='flex justify-between'>
          <span className=''>TOTAL(INCL. VAT)</span>
          <span className='font-bold'>$12</span>
        </div>
        <button className='bg-orange-300 p-3 rounded-md w-1/2 self-end'>CHECKOUT</button>
      </div>
    </div>
  )
}

export default CartPage
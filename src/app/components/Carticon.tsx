import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Carticon = () => {
  return (
    <Link href="/cart" className='flex items-center gap-4'>
          <div className="relative w-8 h-8">
              <Image src="/cart.png" alt='' width={30} height={20}/>
          </div>
          <span>Cart (3)</span>
    </Link>
  )
}

export default Carticon
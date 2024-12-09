import React from 'react'
import Image from 'next/image'

const contact = [
    {
        id:1,
        title: 'Address:',
        desc: '1234 Test Rd #120, San Diego CA 12345'
    },
    {
        id:2,
        title: 'Hours:',
        desc: 'Open Daily: 11am-11pm'
    },
    {
        id:3,
        title: 'Tel:',
        desc: '1.866.857.1234'
    },
    {
        id:4,
        title: 'Email:',
        desc: 'info@zensd.com'
    }
]

const page = () => {
  return (
      <div className='p-4 h-[calc(100vh-6rem)] flex flex-col justify-center items-center md:flex-row'>
          {/* img container */}
          <div className="relative w-full h-1/2 md:h-2/3 lg:h-full">
              <Image src='/cov2.png' alt='' fill className='object-cover'></Image>
          </div>
          {/* text container */}
          <div className="w-full h-1/2 flex flex-col items-center justify-center text-sm bg-orange-200 md:h-2/3 md:text-md lg:h-full lg:text-xl">
              {contact.map((item) => (
                  <div key={item.id} className='w-full p-2 flex flex-col items-center lg:p-4'>
                    <h1 className='font-bold'>{item.title}</h1>
                    <p className='flex flex-wrap'>{item.desc}</p>
                  </div>
              ))}
          </div>
    </div>
  )
}

export default page
import React from 'react'
import Image from 'next/image'

const contact = [
    {
        title: 'Address:',
        desc: '1234 Test Rd #120, San Diego CA 12345'
    },
    {
        title: 'Hours:',
        desc: 'Open Daily: 11am-11pm'
    },
    {
        title: 'Tel:',
        desc: '1.866.857.1234'
    },
    {
        title: 'Email:',
        desc: 'info@zenchasd.com'
    }
]

const page = () => {
  return (
      <div className='p-4 h-[calc(100vh-6rem)] border-2 border-orange-500 flex flex-col justify-center items-center'>
          {/* img container */}
          <div className="relative w-full h-1/3 border-2 border-blue-700">
              <Image src='/cov2.png' alt='' fill className='object-cover'></Image>
          </div>
          {/* text container */}
          <div className="w-full h-1/3 flex flex-wrap justify-around items-center p-2 text-2xl border-2 border-red-300">
              {contact.map((item, index) => (
                  <div key={index} className='w-1/4 p-4'>
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>
                  </div>
              ))}
          </div>
    </div>
  )
}

export default page
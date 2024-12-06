"use client"

import React, { useEffect, useState } from 'react'

type Props = {
    price: number;
    id: number;
    options?: { title: string; additionalPrice: number }[];
}

const Price = ({ price, id, options }: Props) => {
    const [total, setTotal] = useState(price);
    const [quantity, setQuantity] = useState(1);
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        setTotal(quantity * (options ? price + options[selected].additionalPrice : price));
    }, [quantity, selected, options, price]);

  return (
      <div className='flex flex-col gap-4'>
          <h2 className='text-2xl font-bold'>${total}</h2>
          {/* opt container */}
          <div className="flex gap-4">
              {options?.map((item, index) => (
                  <button
                      className="min-w-[6rem] p-2 ring-1 ring-orange-400 rounded-md"
                      key={item.title}
                      style={{
                          background: selected === index ? "#fb923c" : "white",
                          color: selected === index ? "white" : "#fb923c"
                      }}
                      onClick={()=>setSelected(index)}
                  >
                      {item.title}
                  </button>
              ))}
        </div>
          {/* quantity & btn conntainer */}
          <div className="flex justify-between items-center">
              <div className="flex justify-between w-full p-3 ring-1 ring-orange-400">
                  <span>Quantity</span>
                  <div className="flex gap-4 items-center">
                      <button onClick={()=>setQuantity(prev=>prev>1 ? prev-1 : prev=1)}>{'<'}</button>
                      <span>{quantity}</span>
                      <button onClick={()=>setQuantity(prev=>prev<3 ? prev+1 : prev=3)}>{'>'}</button>
                  </div>
              </div>
              <button className='uppercase w-56 bg-orange-300 p-3 ring-1 ring-orange-400'>Add to Cart</button>
          </div>
          
        </div>
  )
}

export default Price